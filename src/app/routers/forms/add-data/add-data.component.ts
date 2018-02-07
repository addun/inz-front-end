import {Component, OnInit} from '@angular/core';
import {FormService} from '../shared/services/form/form.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Input} from '../shared/models/input.model';

@Component({
  selector: 'inz-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.sass']
})
export class AddDataComponent implements OnInit {
  formGroup: FormGroup;
  inputs: Input[];
  formId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private formService: FormService) {
  }

  ngOnInit() {
    this.activatedRoute
      .paramMap
      .subscribe(param => {
        this.formId = param.get('formId');
        this.getDataAndBuildForm();
      });
  }

  getDataAndBuildForm() {
    this.formService
      .getInputs(this.formId)
      .subscribe(inputs => {
        this.inputs = inputs;
        this.formGroup = this.buildForm(inputs);
      });
  }

  buildForm(inputs: Input[]) {
    const group: any = {};
    inputs.forEach(input => {
      group[input.name] = new FormControl('', Validators.required);
    });

    return new FormGroup(group);
  }

  saveData() {
    const data = {
      values: this.formGroup.value
    };
    this.formService
      .saveData(this.formId, data)
      .subscribe(response => {
        this.formGroup.reset();
      });
  }
}
