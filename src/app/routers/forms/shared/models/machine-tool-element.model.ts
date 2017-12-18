import {FormControl, Validators} from '@angular/forms';

export class MachineToolElement {
  name: string;
  description?: string;
  weight: number;
  capabilities?: any[];

  public static getControls(loadModel?: MachineToolElement) {
    if (!loadModel) {
      loadModel = new MachineToolElement();
    }

    return {
      name: new FormControl(loadModel.name, Validators.required),
      description: new FormControl(loadModel.description),
      weight: new FormControl(loadModel.weight),
    };
  }
}
