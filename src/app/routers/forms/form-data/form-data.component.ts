import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {FormService} from '../shared/services/form/form.service';
import {FormRecordDTO} from '../shared/dto/form.dto';
import {InputDTO} from '../shared/dto/input.dto';

@Component({
  selector: 'inz-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.sass']
})
export class FormDataComponent implements OnInit {
  formDataId: string;
  formGroup: FormGroup;
  inputs: InputDTO[];
  formId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private formService: FormService) {
  }


  ngOnInit() {
    this.activatedRoute
      .paramMap
      .subscribe(param => {
        this.formId = param.get('form');
        this.formDataId = param.get('data');
        this.getInputsDataAndBuildForm();
      });
  }

  getInputsDataAndBuildForm() {
    this.formService
      .getInputs(this.formId)
      .subscribe(inputs => {
        this.inputs = inputs;
        this.formGroup = this.buildForm(inputs);
      });
  }

  buildForm(inputs: InputDTO[]) {
    const group: any = {};

    if (this.formDataId) {
      this.formService
        .getFormRecords(this.formId, this.formDataId)
        .subscribe(data => {
          console.log(data);
          inputs.forEach(input => {
            group[input.name] = new FormControl(data.values[input.name], Validators.required);
          });
        });
    } else {
      inputs.forEach(input => {
        group[input.name] = new FormControl('', Validators.required);
      });
    }


    return new FormGroup(group);
  }

  saveData() {
    const data = <FormRecordDTO>{
      values: this.formGroup.value
    };
    this.formService
      .addFormRecord(this.formId, data)
      .subscribe(response => {
        this.formGroup.reset();
      });
  }

}
