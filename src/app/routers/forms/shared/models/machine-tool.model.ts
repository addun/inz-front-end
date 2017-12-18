import {AbstractControl, FormControl, Validators} from '@angular/forms';

export abstract class MachineTool {
  description: string;

  public static getFormControls(loadModel?: MachineTool): { [key: string]: AbstractControl } {
    return {
      description: new FormControl((loadModel ? loadModel.description : ''), Validators.required)
    };
  }
}
