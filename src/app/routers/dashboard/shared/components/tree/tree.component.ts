import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FolderDTO} from '../../dto/folder.dto';

@Component({
  selector: 'inz-folder-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class FolderTreeComponent implements OnInit {
  @Input() tree: FolderDTO[];
  @Output() remove = new EventEmitter<FolderDTO>();
  @Output() rename = new EventEmitter<FolderDTO>();
  @Output() collapse = new EventEmitter<FolderDTO>();
  @Output() select = new EventEmitter<FolderDTO>();
  @Output() add = new EventEmitter<FolderDTO>();

  constructor() {
  }

  ngOnInit() {
  }

  removeFolder(folder: FolderDTO) {
    const indexOf = this.tree.indexOf(folder);
    this.tree.splice(indexOf, 1);
  }

  emitAddChild(folder: FolderDTO) {
    this.add.emit(folder);
  }

  emitRemove(folder: FolderDTO) {
    this.remove.emit(folder);
  }

  emitCollapse(folder: FolderDTO) {
    this.collapse.emit(folder);
  }

  emitRename(folder: FolderDTO) {
    this.rename.emit(folder);
  }

  emitSelect(folder: FolderDTO) {
    this.select.emit(folder);
  }

}
