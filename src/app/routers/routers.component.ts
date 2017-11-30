import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'angular-tree-component';
import {TreeService} from './tree/services/tree/tree.service';

@Component({
  selector: 'inz-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.sass']
})
export class RoutersComponent implements OnInit {
  treeOptions = {
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

}
