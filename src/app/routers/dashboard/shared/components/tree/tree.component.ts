import {Component, Input, OnInit} from '@angular/core';
import {FolderToRead} from '../../models/folder.model';

@Component({
  selector: 'inz-folder-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class FolderTreeComponent implements OnInit {
  @Input() tree: FolderToRead[];

  constructor() {
  }

  ngOnInit() {
  }


}
