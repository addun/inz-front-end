import {Injectable} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MachineToolSpecification} from '../../../../shared/models';

@Injectable()
export class MachineToolSpecificationFormService {

  constructor() {
  }

  private _machineToolSpecificationForm = new FormGroup(MachineToolSpecification.getFormControls(new MachineToolSpecification({
    its_elements: [{
      name: 'test'
    }]
  })));

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

  get itsElements() {
    return <FormArray>this.machineToolSpecificationForm.controls['its_elements'];
  }

  getCapabilities(index) {
    return (<FormArray>this.itsElements.controls[index]).controls['capabilities'];
  }

  getChuck(index): FormArray {
    return this.getCapabilities(index).controls['chucks'];
  }

  getBarFeeder(index: number) {
    return this.getCapabilities(index).controls['bar_feeders'];

  }
}
