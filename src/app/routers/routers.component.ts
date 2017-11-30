import {Component, OnInit, ViewChild} from '@angular/core';
import {ITreeOptions, TreeComponent, TreeNode} from 'angular-tree-component';
import {TreeService} from './tree/services/tree/tree.service';
import {Tree} from './tree/models/tree.model';

@Component({
  selector: 'inz-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.sass']
})
export class RoutersComponent implements OnInit {
  @ViewChild(TreeComponent) tree: TreeComponent;

  treeOptions: ITreeOptions = {
    getChildren: (node: TreeNode) => {
      return this.treeService
        .getTreeChildren(node.id)
        .toPromise()
        ;
    }
  };
  nodes = [
    {
      id: 0,
      name: '/',
      hasChildren: true,
    }
  ];

  constructor(private treeService: TreeService) {
  }

  ngOnInit() {
  }

  addTreeNodeToNode(node: TreeNode) {
    const createdTree = new Tree({
      id: null,
      parent: node.id,
      name: 'wdsfvgrf',
      hasChildren: false
    });

    this.treeService
      .addTree(createdTree)
      .subscribe(tree => {

        if (node.hasChildren) {
          node.getLastChild();
        } else {
          console.log('nie ma dzieci');
        }
        // this.tree.treeModel.nodes.push(createdTreeNode);
        // console.log(node);
        // node.children.push(createdTreeNode);
        // this.tree.treeModel.update();
      });
  }
}
