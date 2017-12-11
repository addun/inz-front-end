import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemSelectedEvent, NodeEvent, NodeMenuItemAction, Tree, TreeModel} from 'ng2-tree';
import {TreeService} from './services/tree/tree.service';
import {TreeToastService} from './services/toast/tree-toast.service';
import {Directory} from './models/directory.model';
import {Tag} from './models/tag.model';
import {Router} from '@angular/router';
import {MachineToolRequirement} from '../forms/shared/models/machine-tool-requirement';

@Component({
  selector: 'inz-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild('treeFFS') treeFFS;
  machineToolRequirements: MachineToolRequirement[] = [];

  public tree: TreeModel = {
    value: '/',
    id: 'root',
    settings: {
      'rightMenu': true,
      isCollapsedOnInit: true,
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
        {action: NodeMenuItemAction.NewTag, name: 'New file', cssClass: 'fa fa-file-o'},
        {action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: 'fa fa-times'},
        {action: NodeMenuItemAction.Custom, name: 'Add', cssClass: 'fa fa-book'}
      ]
    },
    loadChildren: callback => {

    }
  };

  constructor(private treeService: TreeService,
              private router: Router,
              private treeToastService: TreeToastService) {
  }


  ngOnInit() {
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
    if (e.node.isLeaf()) {
      const tagId = +e.node.id;
      this.treeService
        .getMachineTooRequirementsByTag(tagId)
        .subscribe(response => {
          this.machineToolRequirements = response;
        });
    } else {

    }
  }


  onMenuItemSelected(e: MenuItemSelectedEvent): void {
    if (e.selectedItem === 'Add') {
      this.router.navigate(['/forms'], {
        queryParams: {
          'tag': e.node.id
        }
      });

    }
  }

  onNodeRemoved(e: NodeEvent): void {
    if (e.node.isLeaf()) {
      if (e.node.parent.id !== 'root') {
        this.removeTag(e.node);
      }
    } else {
      this.removeNode(e.node);
    }
  }

  onNodeRenamed(e: NodeEvent): void {
    if (e.node.isLeaf()) {
      this.patchTag(e.node);
    } else {
      this.patchNode(e.node);
    }
  }


  onNodeCreated(e: NodeEvent): void {
    if (e.node.isLeaf()) {
      if (e.node.parent.id === 'root') {
        this.treeToastService.operationNotSupported();
        this.treeFFS.getControllerByNodeId(e.node.id).remove();
      } else {
        this.saveTag(e.node);
      }
    } else {
      this.saveNode(e.node);
    }
  }

  private patchNode(node: Tree) {
    const directory = new Directory({
      value: node.value,
      parent: +node.parent.id,
      id: +node.id
    });
    this.treeService
      .patchNode(directory)
      .subscribe(response => {
        this.treeToastService.directoryRenamed();
      }, error => {
        this.treeToastService.operationError();
      });
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
        this.treeToastService.directorySaved();
      }, error => {
        this.treeToastService.operationError();
      });
  }

  private removeNode(node: Tree) {
    this.treeService
      .deleteNode(+node.id)
      .subscribe(response => {
        this.treeToastService.directoryRemoved();
      }, error => {
        this.treeToastService.operationError();
      });
  }


  private patchTag(node: Tree) {
    const tag = new Tag({
      value: node.value,
      node: +node.parent.id,
      id: +node.id
    });
    this.treeService
      .patchTag(tag)
      .subscribe(response => {
        this.treeToastService.fileRenamed();
      }, error => {
        this.treeToastService.operationError();
      });
  }

  private saveTag(node: Tree) {
    const tag = new Tag({
      value: node.value,
      node: +node.parent.id
    });
    this.treeService
      .addTag(tag)
      .subscribe(response => {
        node.id = response.id;
        this.treeToastService.fileSaved();
      }, error => {
        this.treeToastService.operationError();
      });
  }

  private removeTag(node: Tree) {
    this.treeService
      .deleteTag(+node.id)
      .subscribe(response => {
        this.treeToastService.fileRemoved();
      }, error => {
        this.treeToastService.operationError();
      });
  }

}
