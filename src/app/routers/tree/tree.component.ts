import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemSelectedEvent, NodeEvent, NodeMenuItemAction, Tree, TreeComponent as TC, TreeModel} from 'ng2-tree';
import {TreeService} from './services/tree/tree.service';
import {Router} from '@angular/router';
import {Directory} from './models/directory.model';
import {MachineToolSpecificationFormService, MachineToolSpecificationService} from '../forms/machine-tool-specification/shared/services';
import {MachineToolSpecification} from '../forms/shared/models/machine-tool-specification.model';

@Component({
  selector: 'inz-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild('treeFFS') treeFFS: TC;
  public tree: TreeModel = {
    value: '/',
    id: 'root',
    settings: {
      'rightMenu': true,
      isCollapsedOnInit: false,
      cssClasses: {
        expanded: 'fa fa-caret-down',
        collapsed: 'fa fa-caret-right',
        empty: 'disable',
        leaf: 'fa'
      },
      templates: {
        node: '<i class="fa fa-folder-o"></i>',
        leaf: '<i class="fa fa-file-o"></i>',
        'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
      },
      'menuItems': [
        {action: NodeMenuItemAction.Rename, name: 'Rename', cssClass: 'fa fa-pencil-square-o'},
        {action: NodeMenuItemAction.NewFolder, name: 'New folder', cssClass: 'fa fa-folder-o'},
        {action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: 'fa fa-times'},
      ]
    },
    loadChildren: () => {
    }
  };
  selectedNode: Tree;
  machineToolSpecifications: any[] = [];

  constructor(private treeService: TreeService,
              private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private machineToolSpecificationService: MachineToolSpecificationService,
              private router: Router) {
  }


  ngOnInit() {
    this.treeService.getTreeStructure().subscribe(
      structure => {
        this.treeFFS.treeModel.children = structure;
      }
    );
  }

  ngAfterViewInit(): void {
    const rootNodeController = this.treeFFS.getControllerByNodeId('root');
    this.treeService
      .getTreeStructure()
      .subscribe(structure => {
        rootNodeController.setChildren(structure);
      });
  }

  onNodeSelected(e: NodeEvent): void {
    if (e.node.id !== 'root') {
      this.selectedNode = e.node;
      this.treeService.getMachineToolSpecificationsInNode(+this.selectedNode.id)
        .subscribe(data => {
          this.machineToolSpecifications = data;
        });
    } else {
      this.selectedNode = null;
    }

  }


  onMenuItemSelected(e: MenuItemSelectedEvent): void {
  }

  onNodeRemoved(e: MenuItemSelectedEvent): void {
    this.removeNode(e.node);
  }

  public onNodeRenamed(e: NodeEvent): void {
    this.patchNode(e.node);
  }


  public onNodeCreated(e: NodeEvent): void {
    this.saveNode(e.node);
  }

  removeMachineToolSpecification(id: number) {
    if (confirm('Are you sure?')) {
      this.machineToolSpecificationService.removeMachineToolSpecification(
        +this.machineToolSpecifications[id].id
      ).subscribe(model => {
        this.machineToolSpecifications.splice(id, 1);
      });
    }
  }

  editMachineToolSpecification(id: number) {
    this.machineToolSpecificationFormService.loadMachineToolSpecificationFormFromModel(
      this.machineToolSpecifications[id].data
    );
    this.machineToolSpecificationFormService.machineToolSpecificationId = this.machineToolSpecifications[id].id;
    this.router.navigate(['/forms/machine-tool-specification/']);
  }

  addMachineToolSpecifications() {
    const selectedNodeId = this.selectedNode.id;

    this.machineToolSpecificationFormService.loadMachineToolSpecificationFormFromModel(new MachineToolSpecification({
      description: 'Empty'
    }));

    this.machineToolSpecificationService.addMachineToolSpecification(
      this.machineToolSpecificationFormService.machineToolSpecificationForm.value
    ).subscribe(element => {
      this.machineToolSpecifications.push(element);

      this.treeService.addMachineToolSpecificationToNode(+selectedNodeId, element.id)
        .subscribe();
    });

  }

  MachineToolSpecificationToXML(i: number) {
    const xml = json2xml(this.machineToolSpecifications[i].data);
    const file = `<machine_tool_element>${xml}</machine_tool_element>`;

    download('data.xml', file);
  }

  private patchNode(node: Tree) {
    const directory = new Directory({
      value: node.value,
      parent: +node.parent.id,
      id: +node.id
    });
    this.treeService
      .patchNode(directory)
      .subscribe();
  }

  private saveNode(node: Tree) {
    const directory = new Directory({
      value: node.value,
      parent: node.parent.id === 'root' ? null : +node.parent.id
    });
    this.treeService
      .addNode(directory)
      .subscribe(response => {
        node.id = response.id;
      });
  }

  private removeNode(node: Tree) {
    this.treeService
      .deleteNode(+node.id)
      .subscribe();
  }
}

/*
 This work is licensed under Creative Commons GNU LGPL License.
 License: http://creativecommons.org/licenses/LGPL/2.1/
 Version: 0.9
 Author:  Stefan Goessner/2006
 Web:     http://goessner.net/
*/
function json2xml(o, tab?) {
  const toXml = function (v, name, ind) {
    let xml = '';
    if (v instanceof Array) {
      for (let i = 0, n = v.length; i < n; i++)
        xml += ind + toXml(v[i], name, ind + '\t') + '\n';
    }
    else if (typeof(v) === 'object') {
      let hasChild = false;
      xml += ind + '<' + name;
      for (const m in v) {
        if (m.charAt(0) === '@')
          xml += ' ' + m.substr(1) + '="' + v[m].toString() + '"';
        else
          hasChild = true;
      }
      xml += hasChild ? '>' : '/>';
      if (hasChild) {
        for (const m in v) {
          if (m == '#text')
            xml += v[m];
          else if (m == '#cdata')
            xml += '<![CDATA[' + v[m] + ']]>';
          else if (m.charAt(0) != '@')
            xml += toXml(v[m], m, ind + '\t');
        }
        xml += (xml.charAt(xml.length - 1) == '\n' ? ind : '') + '</' + name + '>';
      }
    }
    else {
      xml += ind + '<' + name + '>' + v.toString() + '</' + name + '>';
    }
    return xml;
  }, xml = '';
  for (const m in o)
    xml += toXml(o[m], m, '');
  return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, '');
}

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
