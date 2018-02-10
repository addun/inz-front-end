import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FolderDTO} from '../../models/folder.model';

@Component({
  selector: 'inz-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.sass']
})
export class TreeNodeComponent implements OnInit {
  @Input() folder: FolderDTO;
  @Output() remove = new EventEmitter<FolderDTO>();
  @Output() rename = new EventEmitter<FolderDTO>();
  @Output() collapse = new EventEmitter<FolderDTO>();
  @Output() select = new EventEmitter<FolderDTO>();
  @Output() add = new EventEmitter<FolderDTO>();

  @ViewChild('inputEdit') inputEdit: ElementRef;
  isEditing = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleChildren() {
    this.folder.isCollapse = !this.folder.isCollapse;
    this.emitCollapse();
  }

  emitAddChild() {
    const newFolder: FolderDTO = {
      name: 'Untitled folder',
      parent: this.folder._id,
      isCollapse: true,
      children: []
    };
    if (this.folder.isCollapse) {
      this.toggleChildren();
    }
    this.folder.children.unshift(newFolder);
    this.add.emit(newFolder);
  }

  emitRemove() {
    this.remove.emit(this.folder);
  }

  emitCollapse() {
    this.collapse.emit(this.folder);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (this.inputEdit) {
      this.inputEdit.nativeElement.focus();
    }
  }

}
