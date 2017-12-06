import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemSelectedEvent, NodeEvent, NodeMenuItemAction, Tree, TreeModel} from 'ng2-tree';
import {TreeService} from './services/tree/tree.service';
import {TreeToastService} from './services/toast/tree-toast.service';
import {Directory} from './models/directory.model';
import {Tag} from './models/tag.model';

@Component({
  selector: 'inz-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild('treeFFS') public treeFFS;
  randomData: any[] = [];

  public tree: TreeModel = {
    value: '/',
    id: 'root',
    settings: {
      'rightMenu': true,
      isCollapsedOnInit: true,
      cssClasses: {
        expanded: 'fa fa-caret-down',
        collapsed: 'fa fa-caret-right',
        empty: 'fa fa-caret-right disabled',
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
    children: []
  };

  constructor(private treeService: TreeService, private treeToastService: TreeToastService) {
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
      this.generateRandomData();
    } else {

    }
  }


  onMenuItemSelected(e: MenuItemSelectedEvent): void {
    if (e.selectedItem === 'Add') {
      this.treeToastService.operationNotSupported();
    }
  }

  generateRandomData() {
    this.randomData = [];
    const max = Math.random() * 50;
    for (let i = 0; i < max; ++i) {
      this.randomData.push({
        name: Math.random().toString(36).substr(2, 5).toString(),
        weight: Math.round(Math.random() * 100),
        location: Math.random().toString(36).substr(2, 5).toString()
      });
    }
  }

  onNodeRemoved(e: NodeEvent): void {
    if (e.node.isLeaf()) {
      this.removeTag(e.node);
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
      this.saveTag(e.node);
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
