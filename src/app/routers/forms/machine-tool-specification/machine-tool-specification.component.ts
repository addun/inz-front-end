import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';

import {machineToolSpecificationForm} from '../shared/forms/machine-tool-specification.form';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass']
})
export class MachineToolSpecificationComponent implements OnInit, OnDestroy {
  formModel: DynamicFormControlModel[] = machineToolSpecificationForm();
  formGroup: FormGroup;


  constructor(private formService: DynamicFormService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }


}
