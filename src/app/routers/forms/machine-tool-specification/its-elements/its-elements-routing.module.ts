import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {ItsElementsComponent} from './its-elements.component';
import {TailstockComponent} from './tailstock/tailstock.component';
import {ColletComponent} from './collet/collet.component';
import {ChuckComponent} from './chuck/chuck.component';
import {ToolBreakageComponent} from './tool-breakage/tool-breakage.component';
import {PartProbeComponent} from './part-probe/part-probe.component';
import {ToolSettingComponent} from './tool-setting/tool-setting.component';
import {CoolantComponent} from './coolant/coolant.component';
import {MachineToolAxisComponent} from './machine-tool-axis/machine-tool-axis.component';
import {LinearAxisComponent} from './linear-axis/linear-axis.component';
import {ContinuousRotaryComponent} from './continuous-rotary/continuous-rotary.component';
import {IndexingComponent} from './indexing/indexing.component';
import {LimitedSwingComponent} from './limited-swing/limited-swing.component';
import {CircularWorkTableComponent} from './circular-work-table/circular-work-table.component';
import {RectangularWorkTableComponent} from './rectangular-work-table/rectangular-work-table.component';
import {TurretComponent} from './turret/turret.component';
import {ToolMagazineComponent} from './tool-magazine/tool-magazine.component';
import {ToolChangerComponent} from './tool-changer/tool-changer.component';
import {ToolMagazineContentsComponent} from './tool-magazine/tool-magazine-contents/tool-magazine-contents.component';
import {TurretContentsComponent} from './turret/turret-contents/turret-contents.component';
import {SpindleComponent} from './spindle/spindle.component';
import {SpindleRangeComponent} from './spindle/spindle-range/spindle-range.component';
import {WorkSpindleComponent} from './work-spindle/work-spindle.component';
import {WorkSpindleRangeComponent} from './work-spindle/work-spindle-range/work-spindle-range.component';
import {TaperedSpindleRangeComponent} from './tapered-spindle/tapered-spindle-range/tapered-spindle-range.component';
import {StraightSpindleComponent} from './straight-spindle/straight-spindle.component';
import {TaperedSpindleComponent} from './tapered-spindle/tapered-spindle.component';
import {ThreadedSpindleComponent} from './threaded-spindle/threaded-spindle.component';
import {ThreadedSpindleRangeComponent} from './threaded-spindle/threaded-spindle-range/threaded-spindle-range.component';
import {StraightSpindleRangeComponent} from './straight-spindle/straight-spindle-range/straight-spindle-range.component';
import {PalletComponent} from './pallet/pallet.component';

const routes: Routes = [
  {path: '', component: ItsElementsComponent},
  {path: ':machineToolElementId/bar-feeders', component: BarFeederComponent},
  {path: ':machineToolElementId/tailstocks', component: TailstockComponent},
  {path: ':machineToolElementId/collets', component: ColletComponent},
  {path: ':machineToolElementId/chucks', component: ChuckComponent},
  {path: ':machineToolElementId/tool-breakages', component: ToolBreakageComponent},
  {path: ':machineToolElementId/part-probes', component: PartProbeComponent},
  {path: ':machineToolElementId/tool-settings', component: ToolSettingComponent},
  {path: ':machineToolElementId/collants', component: CoolantComponent},
  {path: ':machineToolElementId/machine-tool-axis', component: MachineToolAxisComponent},
  {path: ':machineToolElementId/linear-axis', component: LinearAxisComponent},
  {path: ':machineToolElementId/continuous-rotary', component: ContinuousRotaryComponent},
  {path: ':machineToolElementId/indexing', component: IndexingComponent},
  {path: ':machineToolElementId/limited-swing', component: LimitedSwingComponent},
  {path: ':machineToolElementId/pallet', component: PalletComponent},
  {path: ':machineToolElementId/rectangular-work-tables', component: RectangularWorkTableComponent},
  {path: ':machineToolElementId/circular-work-table', component: CircularWorkTableComponent},
  {path: ':machineToolElementId/tool-changer', component: ToolChangerComponent},
  {path: ':machineToolElementId/rectangular-work-table', component: RectangularWorkTableComponent},

  {path: ':machineToolElementId/turret', component: TurretComponent},
  {path: ':machineToolElementId/turret/:turretId/turret-contents', component: TurretContentsComponent},

  {path: ':machineToolElementId/tool-magazine', component: ToolMagazineComponent},
  {path: ':machineToolElementId/tool-magazine/:toolMagazineId/tool-magazine-contents', component: ToolMagazineContentsComponent},

  {path: ':machineToolElementId/spindle', component: SpindleComponent},
  {path: ':machineToolElementId/spindle/:spindleId/range', component: SpindleRangeComponent},

  {path: ':machineToolElementId/work-spindle', component: WorkSpindleComponent},
  {path: ':machineToolElementId/work-spindle/:spindleId/range', component: WorkSpindleRangeComponent},

  {path: ':machineToolElementId/tapered-spindle', component: TaperedSpindleComponent},
  {path: ':machineToolElementId/tapered-spindle/:spindleId/range', component: TaperedSpindleRangeComponent},

  {path: ':machineToolElementId/straight-spindle', component: StraightSpindleComponent},
  {path: ':machineToolElementId/straight-spindle/:spindleId/range', component: StraightSpindleRangeComponent},

  {path: ':machineToolElementId/threaded-spindle', component: ThreadedSpindleComponent},
  {path: ':machineToolElementId/threaded-spindle/:spindleId/range', component: ThreadedSpindleRangeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItsElementsRoutingModule {
}
