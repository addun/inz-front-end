import {FormControl, Validators} from '@angular/forms';

export class MachiningSize {
  description?: string;
  x: number;
  y: number;
  z: number;

  public static getFormControls(loadModel?: MachiningSize) {
    if (!loadModel) {
      loadModel = new MachiningSize();
    }

    return {
      description: new FormControl(loadModel.description),
      x: new FormControl(loadModel.x, Validators.required),
      y: new FormControl(loadModel.y, Validators.required),
      z: new FormControl(loadModel.z, Validators.required),
    };
  }
}
