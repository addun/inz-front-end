import {AfterViewInit, Component, Input, OnInit, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FolderToCreate, FolderToRead, FolderToUpdate, initFolderToCreate} from '../../models/folder.model';

@Component({
  selector: 'inz-folder-form-modal',
  templateUrl: './folder-form-modal.component.html',
  styleUrls: ['./folder-form-modal.component.sass']
})
export class FolderFormModalComponent implements OnInit, AfterViewInit {
  @Input() folder: FolderToRead | FolderToCreate | FolderToUpdate;
  @ViewChildren('inputName') inputName;
  folderForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngAfterViewInit() {
    this.inputName.first.nativeElement.focus();
  }

  ngOnInit() {
    if (!this.folder) {
      this.folder = initFolderToCreate();
      this.createFormToFolderCreate(this.folder);
    } else {
      this.createFormToFolderUpdate(<FolderToUpdate>this.folder);
    }
  }

  submitForm() {
    const updatedFolder = Object.assign(this.folder, this.folderForm.value);
    this.activeModal.close(updatedFolder);
  }

  private createFormToFolderUpdate(folder: FolderToUpdate) {
    this.folderForm = new FormGroup({
      name: new FormControl(folder.name, Validators.required),
    });
  }

  private createFormToFolderCreate(folder: FolderToCreate) {
    this.folderForm = new FormGroup({
      name: new FormControl(folder.name, Validators.required),
    });
  }

}
