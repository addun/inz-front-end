import {AbstractControl, FormControl} from '@angular/forms';

export abstract class ElementCapability {
  description?: string;

  constructor(model?) {
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?): { [key: string]: AbstractControl } {
    return {
      description: new FormControl(loadModel.description)
    };
  }
}
