import {Component, OnInit} from '@angular/core';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-measuring-capability',
  templateUrl: './measuring-capability.component.html',
  styleUrls: ['./measuring-capability.component.sass']
})
export class MeasuringCapabilityComponent implements OnInit {
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.measuringCapabilityModel;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
