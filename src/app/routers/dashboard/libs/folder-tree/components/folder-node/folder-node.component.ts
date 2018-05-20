import {Component, Input, OnInit} from '@angular/core';
import {Folder} from '../../models/folder';

@Component({
  selector: 'inz-folder-node',
  templateUrl: './folder-node.component.html',
  styleUrls: ['./folder-node.component.sass']
})
export class FolderNodeComponent implements OnInit {
  @Input() folders: Folder[];

  constructor() {
  }

  ngOnInit() {
  }

  canShowChildren(folder: Folder): boolean {
    return folder.isOpen && this.folders.length > 0;
  }

}
