import {AbstractControl, FormControl, Validators} from '@angular/forms';

export abstract class MachineTool {
  description: string;

  constructor(machineTool) {
    Object.assign(this, machineTool || {});
  }

  public static getFormControls(loadModel?: MachineTool): { [key: string]: AbstractControl } {
    return {
      description: new FormControl((loadModel ? loadModel.description : null), Validators.required)
    };
  }
}
