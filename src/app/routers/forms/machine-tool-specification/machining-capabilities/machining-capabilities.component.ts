import {Component, OnInit} from '@angular/core';
import {MachiningCapability} from '../../shared/models/machining-capability.model';
import {FormArray, FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-machining-capability',
  templateUrl: './machining-capabilities.component.html',
  styleUrls: ['./machining-capabilities.component.sass']
})
export class MachiningCapabilitiesComponent implements OnInit {
  machiningCapabilitiesForm: FormGroup;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get capabilitiesControl(): any {
    return this.machiningCapabilitiesForm.controls['capabilities'];
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
    let machiningCapabilities = this.machineToolSpecificationService.machine_tool_specification.machining_capabilities;

    if (!machiningCapabilities) {
      machiningCapabilities = [new MachiningCapability()];
    }

    return machiningCapabilities.map(model => {
      return new FormGroup(
        MachiningCapability.getFormControls(model)
      );
    });
  }

  addCapability() {
    const control = <FormArray>this.capabilitiesControl;
    control.push(new FormGroup(MachiningCapability.getFormControls()));
  }

  removeCapability(index: number) {
    const controlCount = (<any>this.capabilitiesControl).length;
    const control = <FormArray>this.capabilitiesControl;
    if (controlCount > 1) {
      control.removeAt(index);
    }
  }

  saveAll() {
    this.machineToolSpecificationService
      .machine_tool_specification.machining_capabilities = this.machiningCapabilitiesForm.value['capabilities'];
  }


}
