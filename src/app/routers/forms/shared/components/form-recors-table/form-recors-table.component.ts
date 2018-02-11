import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormDTO, FormRecordDTO} from '../../dto/form.dto';

@Component({
  selector: 'inz-form-recors-table',
  templateUrl: './form-recors-table.component.html',
  styleUrls: ['./form-recors-table.component.sass']
})
export class FormRecorsTableComponent implements OnInit {
  formData: any[] = [];

  constructor(private router: Router) {
  }

  private _form: FormDTO;

  get form(): FormDTO {
    return this._form;
  }

  @Input()
  set form(value: FormDTO) {
    if (value) {
      this._form = value;
      this.formData = this._form.data;
    }
  }

  ngOnInit() {
  }

  getFirstObjectKey(object: Object) {
    return Object.keys(object)[0];
  }

  getFirstObjectKeyValue(object: Object) {
    return object[this.getFirstObjectKey(object)];
  }

  addFormData() {
    this.router.navigate(['forms', this._form._id, 'add-data']);
  }

  editRow(dta: FormRecordDTO) {

  }

  generateXML(dta: FormRecordDTO) {

  }

  removeRow(dta: FormRecordDTO) {
    this.router.navigate(['forms', this._form._id, 'add-data']);
  }
}
