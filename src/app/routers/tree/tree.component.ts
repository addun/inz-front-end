import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemSelectedEvent, NodeEvent, NodeMenuItemAction, Tree, TreeModel} from 'ng2-tree';
import {TreeService} from './services/tree/tree.service';
import {TreeToastService} from './services/toast/tree-toast.service';
import {Directory} from './models/directory.model';
import {Router} from '@angular/router';

@Component({
  selector: 'inz-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild('treeFFS') treeFFS;

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

  }


  onMenuItemSelected(e: MenuItemSelectedEvent): void {
    if (e.selectedItem === 'Add') {
      if (e.node.id === 'root') {
        this.treeToastService.cannotAddToRootDirectory();
      } else {
        this.router.navigate(['/forms/machine-tool-requirement/add'], {
          queryParams: {
            'tag': e.node.id
          }
        });
      }
    }
  }

  onNodeRemoved(e: NodeEvent): void {
    this.removeNode(e.node);
  }

  onNodeRenamed(e: NodeEvent): void {
    this.patchNode(e.node);
  }


  onNodeCreated(e: NodeEvent): void {
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
}
