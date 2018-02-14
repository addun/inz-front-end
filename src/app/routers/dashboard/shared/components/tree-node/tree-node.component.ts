import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FolderDTO} from '../../dto/folder.dto';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  @ViewChild('inputName') inputEdit: ElementRef;
  nodeForm: FormGroup;
  isEditing = false;
  private defaultName = 'Untitled folder';

  constructor() {
  }

  ngOnInit() {

  }

  buildForm() {
    this.nodeForm = new FormGroup({
      name: new FormControl(this.folder.name, Validators.required)
    });
    setTimeout(_ => {
      this.inputEdit.nativeElement.focus();
    }, 0);
  }

  toggleChildren() {
    this.folder.isCollapse = !this.folder.isCollapse;
    this.emitCollapse();
    this.emitSelect();
  }

  emitAddChild() {
    const newFolder: FolderDTO = {
      name: this.defaultName,
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
    if (confirm('Are yout sure?')) {
      this.remove.emit(this.folder);
    }
  }

  emitCollapse() {
    this.collapse.emit(this.folder);
  }

  emitRename() {
    this.rename.emit(this.folder);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.buildForm();
    }
  }

  emitSelect() {
    this.select.emit(this.folder);
  }

  cancelEdit() {
    this.isEditing = false;
  }

  renameNode() {
    this.folder.name = this.nodeForm.value['name'];
    this.emitRename();
    this.cancelEdit();
  }
}
