import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemSelectedEvent, NodeEvent, NodeMenuItemAction, Tree, TreeComponent as TC, TreeModel} from 'ng2-tree';
import {TreeService} from './services/tree/tree.service';
import {TreeToastService} from './services/toast/tree-toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'inz-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild('treeFFS') treeFFS: TC;
  self = {};

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
        {action: NodeMenuItemAction.Custom, name: 'Add', cssClass: 'fa fa-book'},
        {action: NodeMenuItemAction.Remove, name: 'Remove', cssClass: 'fa fa-remove'},
      ]
    },
    loadChildren: (callback) => {
      console.log(this);
    }
  };

  constructor(private treeService: TreeService,
              private router: Router,
              private treeToastService: TreeToastService) {
    this.self = this;
    console.log(self);
    console.log(this);
  }


  ngOnInit() {
    this.self  = this;
    console.log(self);

  }

  ngAfterViewInit(): void {
  }

  onNodeSelected(e: NodeEvent): void {
    console.log(
      this.treeFFS.getController().toTreeModel()
    );
  }


  onMenuItemSelected(e: MenuItemSelectedEvent): void {
  }

  onNodeRemoved(e: NodeEvent): void {
  }

  onNodeRenamed(e: NodeEvent): void {
  }


  onNodeCreated(e: NodeEvent): void {
  }

  private patchNode(node: Tree) {
  }

  private saveNode(node: Tree) {
  }

  private removeNode(node: Tree) {
  }
}
