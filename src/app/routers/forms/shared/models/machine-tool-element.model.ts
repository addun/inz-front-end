import {FormControl, Validators} from '@angular/forms';
import {BarFeeder} from './bar-feeder.model';
import {Tailstock} from './tailstock.model';
import {Collet} from './collet.model';
import {Chuck} from './chuck.model';
import {ToolBreakage} from './tool-breakage.model';
import {PartProbe} from './part-probe.model';
import {ToolSetting} from './tool-setting.model';
import {Coolant} from './coolant.model';
import {MachineToolAxis} from './machine-tool-axis.model';
import {LinearAxis} from './linear-axis.model';
import {ContinuousRotary} from './continuous-rotary.model';
import {Indexing} from './indexing.model';
import {LimitedSwing} from './limited-swing.model';
import {Pallet} from './pallet.model';
import {CircularWorkTable} from './circular-work-table.model';
import {RectangularWorkTable} from './rectangular-work-table.model';
import {ToolChanger} from './tool-changer.model';
import {ToolMagazine} from './tool-magazine.model';
import {Turret} from './turret.model';

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
  machine_tool_axes: MachineToolAxis[] = [];
  linear_axis: LinearAxis[] = [];
  continuous_rotary: ContinuousRotary[] = [];
  indexing: Indexing[] = [];
  limited_swing: LimitedSwing[] = [];
  pallet: Pallet[] = [];
  circular_work_tables: CircularWorkTable[] = [];
  rectangular_work_tables: RectangularWorkTable[] = [];
  tool_changer: ToolChanger[] = [];
  tool_magazine: ToolMagazine[] = [];
  turret: Turret[] = [];
}
