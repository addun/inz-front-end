import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-device-id',
  templateUrl: './device-id.component.html',
  styleUrls: ['./device-id.component.sass']
})
export class DeviceIdComponent implements OnInit {
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.deviceIdModel;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}