import {FormControl, Validators} from '@angular/forms';
import {BarFeeder} from './bar-feeder.model';
import {Tailstock} from './tailstock.model';
import {Collet} from './collet.model';
import {Chuck} from './chuck.model';
import {ToolBreakage} from './tool-breakage.model';
import {PartProbe} from './part-probe.model';
import {ToolSetting} from './tool-setting.model';
import {Coolant} from './coolant.model';

export class MachineToolElement {
  name: string = null;
  description?: string = null;
  weight: number = null;
  capabilities?: Capabilities = new Capabilities();

  constructor(machineToolElement?) {
    Object.assign(this, machineToolElement);
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
  tailstocks: Tailstock[] = [];
  bar_feeders: BarFeeder[] = [];
  collets: Collet[] = [];
  chucks: Chuck[] = [];
  tool_breakages: ToolBreakage[] = [];
  part_probes: PartProbe[] = [];
  tool_settings: ToolSetting[] = [];
  coolant: Coolant[] = [];
}
