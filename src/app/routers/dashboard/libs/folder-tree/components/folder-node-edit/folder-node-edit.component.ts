import {AfterViewInit, Component, Input, OnInit, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Folder} from '../../models/folder';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'inz-folder-node-edit',
  templateUrl: './folder-node-edit.component.html',
  styleUrls: ['./folder-node-edit.component.sass']
})
export class FolderNodeEditComponent implements OnInit, AfterViewInit {
  @Input() folder: Folder;
  @ViewChildren('inputName') inputName;
  folderForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngAfterViewInit() {
    this.inputName.first.nativeElement.focus();
  }

  ngOnInit() {
    this.buildForm();
  }

  submitForm() {
    const updatedFolder = Object.assign(this.folder, this.folderForm.value);
    this.activeModal.close(updatedFolder);
  }

  private buildForm() {
    this.folderForm = new FormGroup({
      name: new FormControl(this.folder.name, Validators.required),
    });
  }
}
