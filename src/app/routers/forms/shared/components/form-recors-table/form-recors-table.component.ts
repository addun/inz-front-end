import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormDTO, FormRecordDTO} from '../../dto/form.dto';
import {FormService} from '../../services/form/form.service';

@Component({
  selector: 'inz-form-recors-table',
  templateUrl: './form-recors-table.component.html',
  styleUrls: ['./form-recors-table.component.sass']
})
export class FormRecorsTableComponent implements OnInit {

  constructor(private router: Router,
              private formService: FormService) {
  }

  private _form: FormDTO;

  get form(): FormDTO {
    return this._form;
  }

  @Input()
  set form(value: FormDTO) {
    if (value) {
      this._form = value;
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

  editRow(formRecordDTO: FormRecordDTO) {
    this.router.navigate(['/forms', this.form._id, 'records', formRecordDTO._id, 'edit']);

  }

  generateXML(dta: FormRecordDTO) {

  }

  removeRow(dta: FormRecordDTO) {
    if (confirm('Are you sure?')) {
      this.formService
        .removeRecord(dta._id)
        .subscribe(_ => {
          const indexOf = this.form.records.indexOf(dta);
          this.form.records.splice(indexOf, 1);
        })

      ;
    }
  }
}
