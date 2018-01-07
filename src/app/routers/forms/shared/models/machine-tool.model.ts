import {AbstractControl, FormControl, Validators} from '@angular/forms';

export abstract class MachineTool {
  description: string = null;

  constructor(machineTool) {
    Object.assign(this, machineTool);
  }

  public static getFormControls(loadModel?: MachineTool): { [key: string]: AbstractControl } {
    return {
      description: new FormControl(loadModel.description,  Validators.required)
    };
  }
}
