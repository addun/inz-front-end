import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
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

  buildMachineToolSpecificationFromModel(model: MachineToolSpecification) {
    this.machineToolSpecificationForm = new FormGroup(MachineToolSpecification.getFormControls(model));
  }

}
