import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormArrayComponent} from '../../shared/models/form-array-component';

@Component({
  selector: 'inz-machining-capability',
  templateUrl: './machining-capabilities.component.html',
  styleUrls: ['./machining-capabilities.component.sass']
})
export class MachiningCapabilitiesComponent extends FormArrayComponent implements OnInit {
  constructor(protected formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
    super();
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.machiningCapabilitiesModel;
    this.createFormGroup();
    this.createArrayActions();
  }

}
