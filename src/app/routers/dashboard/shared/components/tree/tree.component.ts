import {Component, Input, OnInit} from '@angular/core';
import {FolderDTO} from '../../dto/folder.dto';

@Component({
  selector: 'inz-folder-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class FolderTreeComponent implements OnInit {
  @Input() tree: FolderDTO[];

  constructor() {
  }

  ngOnInit() {
  }

  showChildren(folder: FolderDTO): boolean {
    return !folder.isCollapse && folder.children.length > 0;
  }

}
