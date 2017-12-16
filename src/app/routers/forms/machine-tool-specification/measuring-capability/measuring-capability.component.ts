import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormComponent} from '../../shared/models/form-component';

@Component({
  selector: 'inz-measuring-capability',
  templateUrl: './measuring-capability.component.html',
  styleUrls: ['./measuring-capability.component.sass']
})
export class MeasuringCapabilityComponent extends FormComponent implements OnInit {

  constructor(protected formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
    super();
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.measuringCapabilityModel;
    this.createFormGroup();
  }

}
