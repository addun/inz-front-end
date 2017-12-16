import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormComponent} from '../../shared/models/form-component';

@Component({
  selector: 'inz-device-id',
  templateUrl: './device-id.component.html',
  styleUrls: ['./device-id.component.sass']
})
export class DeviceIdComponent extends FormComponent implements OnInit {

  constructor(protected formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
    super();
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.deviceIdModel;
    this.createFormGroup();
  }

}
