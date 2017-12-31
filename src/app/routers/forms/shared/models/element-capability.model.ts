import {AbstractControl, FormControl} from '@angular/forms';

export abstract class ElementCapability {
  description?: string;

  constructor(model?) {
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?: ElementCapability): { [key: string]: AbstractControl } {
    return {
      description: new FormControl((loadModel ? loadModel.description : null))
    };
  }
}
