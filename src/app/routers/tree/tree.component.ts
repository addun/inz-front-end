import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemSelectedEvent, NodeEvent, NodeMenuItemAction, Tree, TreeComponent as TC, TreeModel} from 'ng2-tree';
import {TreeService} from './services/tree/tree.service';
import {Router} from '@angular/router';
import {Directory} from './models/directory.model';

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

  constructor(private treeService: TreeService,
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
    this.selectedNode = e.node;
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
