import {Component, OnInit} from '@angular/core';
import {MachiningCapability} from '../shared/models/machining-capability.model';
import {FormArray} from '@angular/forms';
import {MachineToolSpecificationFormService} from '../shared/services';

@Component({
  selector: 'inz-machining-capability',
  templateUrl: './machining-capabilities.component.html',
  styleUrls: ['./machining-capabilities.component.sass']
})
export class MachiningCapabilitiesComponent implements OnInit {
  machiningCapabilityForms: FormArray;
  generator = MachiningCapability.getFormControls;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService) {
  }

  ngOnInit(): void {
    this.machiningCapabilityForms = <FormArray> this.machineToolSpecificationFormService.machineToolSpecificationForm
      .controls['machining_capabilities'];
  }

}
