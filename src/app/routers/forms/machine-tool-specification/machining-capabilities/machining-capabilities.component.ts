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
  formModelGroup: FormGroup;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): any {
    return this.formModelGroup.controls['capabilities'];
  }

  get model(): MachiningCapability[] {
    return this.machineToolSpecificationService.machine_tool_specification.machining_capabilities;
  }

  set model(machiningCapabilities: MachiningCapability[]) {
    this.machineToolSpecificationService.machine_tool_specification.machining_capabilities = machiningCapabilities;
  }

  ngOnInit(): void {
    this.formModelGroup = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      capabilities: new FormArray(this.loadForm())
    });
  }

  loadForm(): FormGroup[] {
    let machiningCapabilities = this.model;

    console.log(this.model);

    if (!machiningCapabilities.length) {
      machiningCapabilities = [new MachiningCapability()];
    }

    return machiningCapabilities.map(model => {
      return new FormGroup(
        MachiningCapability.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(MachiningCapability.getFormControls()));
  }

  remove(index: number) {
    const controlCount = (<any>this.modelForm).length;
    const control = <FormArray>this.modelForm;
    if (controlCount > 1) {
      control.removeAt(index);
    }
  }

  saveAll() {
    this.model = this.modelForm.value;
  }


}
