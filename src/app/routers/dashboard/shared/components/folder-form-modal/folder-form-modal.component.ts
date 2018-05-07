import {AfterViewInit, Component, Input, OnInit, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'inz-folder-form-modal',
  templateUrl: './folder-form-modal.component.html',
  styleUrls: ['./folder-form-modal.component.sass']
})
export class FolderFormModalComponent implements OnInit, AfterViewInit {
  @Input() name: string;
  @Input() isCreated = false;
  @ViewChildren('inputName') inputName;
  folderForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngAfterViewInit() {
    this.inputName.first.nativeElement.focus();
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    this.activeModal.close(this.folderForm.value);
  }

  private createForm() {
    this.folderForm = new FormGroup({
      name: new FormControl(this.name, Validators.required)
    });
  }

}
