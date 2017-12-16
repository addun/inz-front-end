import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';

import {machineToolSpecificationForm} from '../shared/forms/machine-tool-specification.form';
import {MachineToolSpecificationService} from './shared/services/machine-tool-specification/machine-tool-specification.service';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass']
})
export class MachineToolSpecificationComponent implements OnInit {
  formModel: DynamicFormControlModel[] = machineToolSpecificationForm();
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }


  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.deviceIdModel;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  generate() {
    return this.machineToolSpecificationService.generateData();
  }


}
