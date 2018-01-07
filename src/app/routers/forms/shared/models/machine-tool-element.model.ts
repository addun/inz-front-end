import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
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
import {Spindle} from './spindle.model';
import {TaperedSpindle} from './tapered-spindle.model';
import {WorkSpindle} from './work-spindle.model';
import {StraightSpindle} from './straight-spindle.model';
import {ThreadedSpindle} from './threaded-spindle.model';

export class MachineToolElement {
  name: string = null;
  description?: string = null;
  weight: number = null;
  capabilities?: Capabilities = new Capabilities();

  constructor(machineToolElement?) {
    Object.assign(this, machineToolElement);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new MachineToolElement();
    }

    return {
      name: new FormControl(loadModel.name, Validators.required),
      description: new FormControl(loadModel.description),
      weight: new FormControl(loadModel.weight),
      capabilities: new FormGroup(
        Capabilities.getFormControls(loadModel.capabilities)
      )
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
  linear_axes: LinearAxis[] = [];
  continuous_rotaries: ContinuousRotary[] = [];
  indexings: Indexing[] = [];
  limited_swings: LimitedSwing[] = [];
  pallets: Pallet[] = [];
  circular_work_tables: CircularWorkTable[] = [];
  rectangular_work_tables: RectangularWorkTable[] = [];
  tool_changers: ToolChanger[] = [];
  tool_magazines: ToolMagazine[] = [];
  turrets: Turret[] = [];
  spindles: Spindle[] = [];
  work_spindles: WorkSpindle[] = [];
  tapered_spindles: TaperedSpindle[] = [];
  straight_spindles: StraightSpindle[] = [];
  threaded_spindles: ThreadedSpindle[] = [];

  constructor(model?) {
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new Capabilities();
    }

    const formControls = {
      tailstocks: new FormArray([]),
      bar_feeders: new FormArray([]),
      collets: new FormArray([]),
      chucks: new FormArray([]),
      tool_breakages: new FormArray([]),
      part_probes: new FormArray([]),
      tool_settings: new FormArray([]),
      coolant: new FormArray([]),
      machine_tool_axes: new FormArray([]),
      linear_axes: new FormArray([]),
      continuous_rotaries: new FormArray([]),
      indexings: new FormArray([]),
      limited_swings: new FormArray([]),
      pallets: new FormArray([]),
      circular_work_tables: new FormArray([]),
      rectangular_work_tables: new FormArray([]),
      tool_changers: new FormArray([]),
      tool_magazines: new FormArray([]),
      turrets: new FormArray([]),
      spindles: new FormArray([]),
      work_spindles: new FormArray([]),
      tapered_spindles: new FormArray([]),
      straight_spindles: new FormArray([]),
      threaded_spindles: new FormArray([]),
    };

    loadModel.tailstocks.forEach(item => {
      formControls.tailstocks.push(new FormGroup(
        Tailstock.getFormControls(item)
      ));
    });
    loadModel.bar_feeders.forEach(item => {
      formControls.bar_feeders.push(new FormGroup(
        BarFeeder.getFormControls(item)
      ));
    });
    loadModel.collets.forEach(item => {
      formControls.collets.push(new FormGroup(
        Collet.getFormControls(item)
      ));
    });
    loadModel.chucks.forEach(item => {
      formControls.chucks.push(new FormGroup(
        Chuck.getFormControls(item)
      ));
    });
    loadModel.tool_breakages.forEach(item => {
      formControls.tool_breakages.push(new FormGroup(
        ToolBreakage.getFormControls(item)
      ));
    });
    loadModel.part_probes.forEach(item => {
      formControls.part_probes.push(new FormGroup(
        PartProbe.getFormControls(item)
      ));
    });
    loadModel.tool_settings.forEach(item => {
      formControls.tool_settings.push(new FormGroup(
        ToolSetting.getFormControls(item)
      ));
    });
    loadModel.coolant.forEach(item => {
      formControls.coolant.push(new FormGroup(
        Coolant.getFormControls(item)
      ));
    });
    loadModel.machine_tool_axes.forEach(item => {
      formControls.machine_tool_axes.push(new FormGroup(
        MachineToolAxis.getFormControls(item)
      ));
    });
    loadModel.linear_axes.forEach(item => {
      formControls.linear_axes.push(new FormGroup(
        LinearAxis.getFormControls(item)
      ));
    });
    loadModel.continuous_rotaries.forEach(item => {
      formControls.continuous_rotaries.push(new FormGroup(
        ContinuousRotary.getFormControls(item)
      ));
    });
    loadModel.indexings.forEach(item => {
      formControls.indexings.push(new FormGroup(
        Indexing.getFormControls(item)
      ));
    });
    loadModel.limited_swings.forEach(item => {
      formControls.limited_swings.push(new FormGroup(
        LimitedSwing.getFormControls(item)
      ));
    });
    loadModel.pallets.forEach(item => {
      formControls.pallets.push(new FormGroup(
        Pallet.getFormControls(item)
      ));
    });
    loadModel.circular_work_tables.forEach(item => {
      formControls.circular_work_tables.push(new FormGroup(
        CircularWorkTable.getFormControls(item)
      ));
    });
    loadModel.rectangular_work_tables.forEach(item => {
      formControls.rectangular_work_tables.push(new FormGroup(
        RectangularWorkTable.getFormControls(item)
      ));
    });
    loadModel.tool_changers.forEach(item => {
      formControls.tool_changers.push(new FormGroup(
        ToolChanger.getFormControls(item)
      ));
    });
    loadModel.tool_magazines.forEach(item => {
      formControls.tool_magazines.push(new FormGroup(
        ToolMagazine.getFormControls(item)
      ));
    });
    loadModel.turrets.forEach(item => {
      formControls.turrets.push(new FormGroup(
        Turret.getFormControls(item)
      ));
    });
    loadModel.spindles.forEach(item => {
      formControls.spindles.push(new FormGroup(
        Spindle.getFormControls(item)
      ));
    });
    loadModel.work_spindles.forEach(item => {
      formControls.work_spindles.push(new FormGroup(
        WorkSpindle.getFormControls(item)
      ));
    });
    loadModel.tapered_spindles.forEach(item => {
      formControls.tapered_spindles.push(new FormGroup(
        TaperedSpindle.getFormControls(item)
      ));
    });
    loadModel.straight_spindles.forEach(item => {
      formControls.straight_spindles.push(new FormGroup(
        StraightSpindle.getFormControls(item)
      ));
    });
    loadModel.threaded_spindles.forEach(item => {
      formControls.threaded_spindles.push(new FormGroup(
        ThreadedSpindle.getFormControls(item)
      ));
    });

    return formControls;
  }
}
