import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TreeService} from './tree/services/tree/tree.service';
import {NodeEvent, Tree, TreeModel} from 'ng2-tree';
import {Directory} from './tree/models/directory.model';
import {Tag} from './tree/models/tag.model';
import {TreeToastService} from './tree/services/toast/tree-toast.service';

@Component({
  selector: 'inz-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.sass']
})
export class RoutersComponent implements OnInit, AfterViewInit {
  @ViewChild('treeFFS') public treeFFS;
  public tree: TreeModel = {
    value: '/',
    id: 'root',
    settings: {
      cssClasses: {
        expanded: 'fa fa-caret-down',
        collapsed: 'fa fa-caret-right',
        empty: 'fa fa-caret-right disabled',
        leaf: 'fa'
      },
      templates: {
        node: '<i class="fa fa-folder-o"></i>',
        leaf: '<i class="fa fa-file-o"></i>'
      }
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
        console.log(structure);
        rootNodeController.setChildren(structure);
      });
  }

  public onNodeRemoved(e: NodeEvent): void {
    if (e.node.isLeaf()) {
      this.removeTag(e.node);
    } else {
      this.removeNode(e.node);
    }
  }

  public onNodeRenamed(e: NodeEvent): void {
    if (e.node.isLeaf()) {
      this.patchTag(e.node);
    } else {
      this.patchNode(e.node);
    }
  }


  public onNodeCreated(e: NodeEvent, controller): void {
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
      });
  }

  private removeNode(node: Tree) {
    this.treeService
      .deleteNode(+node.id)
      .subscribe(response => {
        this.treeToastService.directoryRemoved();
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
      });
  }

  private removeTag(node: Tree) {
    this.treeService
      .deleteTag(+node.id)
      .subscribe(response => {
        this.treeToastService.fileRemoved();
      });
  }
}
