import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormArray, FormGroup} from '@angular/forms';
import {machiningCapabilityForm} from '../../shared/forms/machining-capability.form';

@Component({
  selector: 'inz-machining-capability',
  templateUrl: './machining-capability.component.html',
  styleUrls: ['./machining-capability.component.sass']
})
export class MachiningCapabilityComponent implements OnInit, OnDestroy {
  formArrayModel: DynamicFormArrayModel;
  formModel: DynamicFormControlModel[] = [
    new DynamicFormArrayModel({
      id: 'array',
      initialCount: 1,
      groupFactory: machiningCapabilityForm
    })
  ];
  formGroup: FormGroup;
  formArrayControl: FormArray;

  constructor(private formService: DynamicFormService) {
  }


  ngOnDestroy(): void {

  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);

    this.formArrayControl = this.formGroup.get('array') as FormArray;
    this.formArrayModel = this.formService.findById('array', this.formModel) as DynamicFormArrayModel;
  }

  addItem() {
    this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
  }

  clear() {
    this.formService.clearFormArray(this.formArrayControl, this.formArrayModel);
  }

}

