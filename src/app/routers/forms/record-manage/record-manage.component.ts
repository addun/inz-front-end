import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputDTO} from '../shared/dto/input.dto';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../shared/services/form/form.service';
import {FormRecordDTO} from '../shared/dto/form.dto';

@Component({
  selector: 'inz-record-manage',
  templateUrl: './record-manage.component.html',
  styleUrls: ['./record-manage.component.sass']
})
export class RecordManageComponent implements OnInit {
  formRecordId: string;
  formGroup: FormGroup;
  inputs: InputDTO[];
  formId: string;
  formName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formService: FormService) {
  }


  ngOnInit() {
    this.activatedRoute
      .paramMap
      .subscribe(param => {
        this.formId = param.get('form');
        this.formRecordId = param.get('record');
        this.getInputsDataAndBuildForm();
      });
  }

  getInputsDataAndBuildForm() {
    this.formService
      .getForm(this.formId)
      .subscribe(form => {
        this.formName = form.name;
        if (!form.predefined) {
          this.inputs = form.inputs;
          this.buildForm();
        } else {
          this.router.navigate(['/forms/', 'predefined', this.formName], {
            queryParams: {
              form: this.formId,
              record: this.formRecordId
            }
          });
        }
      });
  }

  buildForm() {
    const group: any = {};
    if (this.formRecordId) {
      this.formService
        .getRecord(this.formRecordId)
        .subscribe(record => {
          this.inputs.forEach(input => {
            group[input.name] = new FormControl(record.values[input.name], Validators.required);
          });
          this.formGroup = new FormGroup(group);
        });
    } else {
      this.inputs.forEach(input => {
        group[input.name] = new FormControl('', Validators.required);
      });
      this.formGroup = new FormGroup(group);
    }
  }

  saveAndCreateNext() {
    const data = <FormRecordDTO>{
      values: this.formGroup.value
    };
    if (this.formRecordId) {
      data._id = this.formRecordId;
      this.formService.updateRecord(data)
        .subscribe(_ => {
          this.router.navigate(['/forms', this.formId, 'records', 'add']);
        });
    } else {
      this.formService
        .addFormRecord(this.formId, data)
        .subscribe(response => {
          this.formGroup.reset();
        });
    }
  }

  saveAndContinue() {
    const data = <FormRecordDTO>{
      values: this.formGroup.value
    };
    if (this.formRecordId) {
      data._id = this.formRecordId;
      console.log(data);
      this.formService.updateRecord(data)
        .subscribe();
    } else {
      this.formService
        .addFormRecord(this.formId, data)
        .subscribe(response => {
          this.router.navigate(['/forms', this.formId, 'records', response._id, 'edit']);
        });
    }
  }

}
