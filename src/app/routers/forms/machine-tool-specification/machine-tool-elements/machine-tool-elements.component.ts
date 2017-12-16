import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {machineToolElementForm} from '../../shared/forms/machine-tool-element.form';

@Component({
  selector: 'inz-machine-tool-elements',
  templateUrl: './machine-tool-elements.component.html',
  styleUrls: ['./machine-tool-elements.component.sass']
})
export class MachineToolElementsComponent implements OnInit, OnDestroy {
  formModel: DynamicFormControlModel[] = [
    new DynamicFormArrayModel({
      id: 'array',
      initialCount: 2,
      groupFactory: machineToolElementForm
    })
  ];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {
  }

  ngOnDestroy() {
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
