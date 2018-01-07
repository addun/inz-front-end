import {Injectable} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MachineToolSpecification} from '../../../../shared/models';

@Injectable()
export class MachineToolSpecificationFormService {

  constructor() {
  }

  private _machineToolSpecificationForm = new FormGroup(MachineToolSpecification.getFormControls());

  get machineToolSpecificationForm() {
    return this._machineToolSpecificationForm;
  }

  set machineToolSpecificationForm(value) {
    this._machineToolSpecificationForm = value;
  }

  get installationForm() {
    return <FormGroup>this.machineToolSpecificationForm.controls['installation'];
  }

  get environmentalEvaluation() {
    return <FormGroup>this.machineToolSpecificationForm.controls['environmental_evaluation'];
  }

  get standardMachiningProcessForm() {
    return <FormArray>this.environmentalEvaluation.controls['power_for_standard_machining'];
  }

  buildMachineToolSpecificationFromModel(model: MachineToolSpecification) {
    this.machineToolSpecificationForm = new FormGroup(MachineToolSpecification.getFormControls(model));
  }

}
