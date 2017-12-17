import {Component, OnInit} from '@angular/core';
import {MachiningCapability} from '../../shared/models/machining-capability.model';
import {FormArray, FormGroup} from '@angular/forms';
import {MachiningCapabilityProfile} from '../../shared/types/machining-capability-profile.type';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-machining-capability',
  templateUrl: './machining-capabilities.component.html',
  styleUrls: ['./machining-capabilities.component.sass']
})
export class MachiningCapabilitiesComponent implements OnInit {
  machiningCapabilitiesForm: FormGroup;
  machiningCapabilityProfile = MachiningCapabilityProfile;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {

  }

  ngOnInit(): void {
    this.machiningCapabilitiesForm = this.buildCapabilitiesForm();
  }

  buildCapabilitiesForm(): FormGroup {
    return new FormGroup({
      capabilities: new FormArray(this.loadCapabilityForm())
    });
  }

  loadCapabilityForm(): FormGroup[] {
    const machiningCapabilities = this.machineToolSpecificationService.machine_tool_specification.machining_capabilities;
    return machiningCapabilities.map(model => {
      return new FormGroup(
        MachiningCapability.getFormControls(model)
      );
    });
  }

  addCapability() {
    const control = <FormArray>this.machiningCapabilitiesForm.controls['capabilities'];
    control.push(new FormGroup(MachiningCapability.getFormControls()));
  }

  removeCapability(index: number) {
    const controlCount = (<any>this.machiningCapabilitiesForm.controls['capabilities']).length;
    const control = <FormArray>this.machiningCapabilitiesForm.controls['capabilities'];
    if (controlCount > 1) {
      control.removeAt(index);
    }
  }

  saveAll() {
    this.machineToolSpecificationService
      .machine_tool_specification.machining_capabilities = this.machiningCapabilitiesForm.value['capabilities'];
  }


}
