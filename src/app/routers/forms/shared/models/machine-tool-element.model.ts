import {FormControl, Validators} from '@angular/forms';
import {BarFeeder} from './bar-feeder.model';

export class MachineToolElement {
  name: string;
  description?: string;
  weight: number;
  capabilities?: Capabilities = new Capabilities();

  constructor(machineToolElement?) {
    Object.assign(this, machineToolElement || {});
  }

  public static getFormControls(loadModel?: MachineToolElement) {
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


class Capabilities {
  bar_feeders: BarFeeder[] = [];
}
