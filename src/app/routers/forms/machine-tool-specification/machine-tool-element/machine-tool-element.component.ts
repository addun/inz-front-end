import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {machineToolElement} from '../../shared/forms/machine-tool-element.form';

@Component({
  selector: 'inz-machine-tool-element',
  templateUrl: './machine-tool-element.component.html',
  styleUrls: ['./machine-tool-element.component.sass']
})
export class MachineToolElementComponent implements OnInit, OnDestroy {
  formModel: DynamicFormControlModel[] = [
    new DynamicFormArrayModel({
      id: 'array',
      initialCount: 2,
      groupFactory: machineToolElement
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
