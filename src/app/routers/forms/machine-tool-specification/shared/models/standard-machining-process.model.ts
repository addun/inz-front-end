import {FormControl, Validators} from '@angular/forms';

export class StandardMachiningProcess {
  process_description: string = null;
  type_of_machining: string = null;
  power: string = null;
  electric_power: string = null;


  constructor(standardMachiningProcess?) {
    Object.assign(this, standardMachiningProcess);
  }

  public static getFormControls(loadModel?: StandardMachiningProcess) {
    if (!loadModel) {
      loadModel = new StandardMachiningProcess();
    }

    return {
      process_description: new FormControl(loadModel.process_description, Validators.required),
      type_of_machining: new FormControl(loadModel.type_of_machining, Validators.required),
      power: new FormControl(loadModel.power, Validators.required),
      electric_power: new FormControl(loadModel.electric_power, Validators.required),
    };
  }
}
