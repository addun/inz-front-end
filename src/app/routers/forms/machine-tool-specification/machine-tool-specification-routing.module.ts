import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StandardMachiningProcessComponent} from './standard-machining-process/standard-machining-process.component';
import {MachiningCapabilitiesComponent} from './machining-capabilities/machining-capabilities.component';
import {InstallationComponent} from './installation/installation.component';
import {MachineToolSpecificationComponent} from './machine-tool-specification.component';
import {BarFeederComponent} from './its-elements/bar-feeder/bar-feeder.component';
import {ItsElementsComponent} from './its-elements/its-elements.component';
import {TailstockComponent} from './its-elements/tailstock/tailstock.component';
import {ColletComponent} from './its-elements/collet/collet.component';
import {ChuckComponent} from './its-elements/chuck/chuck.component';
import {ToolBreakageComponent} from './its-elements/tool-breakage/tool-breakage.component';
import {PartProbeComponent} from './its-elements/part-probe/part-probe.component';
import {ToolSettingComponent} from './its-elements/tool-setting/tool-setting.component';
import {CoolantComponent} from './its-elements/coolant/coolant.component';
import {MachineToolAxisComponent} from './its-elements/machine-tool-axis/machine-tool-axis.component';
import {LinearAxisComponent} from './its-elements/linear-axis/linear-axis.component';
import {ContinuousRotaryComponent} from './its-elements/continuous-rotary/continuous-rotary.component';
import {IndexingComponent} from './its-elements/indexing/indexing.component';
import {LimitedSwingComponent} from './its-elements/limited-swing/limited-swing.component';
import {CircularWorkTableComponent} from './its-elements/circular-work-table/circular-work-table.component';
import {RectangularWorkTableComponent} from './its-elements/rectangular-work-table/rectangular-work-table.component';
import {TurretComponent} from './its-elements/turret/turret.component';
import {ToolMagazineComponent} from './its-elements/tool-magazine/tool-magazine.component';
import {ToolChangerComponent} from './its-elements/tool-changer/tool-changer.component';
import {ToolMagazineContentsComponent} from './its-elements/tool-magazine/tool-magazine-contents/tool-magazine-contents.component';
import {TurretContentsComponent} from './its-elements/turret/turret-contents/turret-contents.component';
import {SpindleComponent} from './its-elements/spindle/spindle.component';
import {SpindleRangeComponent} from './its-elements/spindle/spindle-range/spindle-range.component';
import {WorkSpindleComponent} from './its-elements/work-spindle/work-spindle.component';
import {WorkSpindleRangeComponent} from './its-elements/work-spindle/work-spindle-range/work-spindle-range.component';
import {TaperedSpindleRangeComponent} from './its-elements/tapered-spindle/tapered-spindle-range/tapered-spindle-range.component';
import {StraightSpindleComponent} from './its-elements/straight-spindle/straight-spindle.component';
import {TaperedSpindleComponent} from './its-elements/tapered-spindle/tapered-spindle.component';
import {ThreadedSpindleComponent} from './its-elements/threaded-spindle/threaded-spindle.component';
import {ThreadedSpindleRangeComponent} from './its-elements/threaded-spindle/threaded-spindle-range/threaded-spindle-range.component';
import {StraightSpindleRangeComponent} from './its-elements/straight-spindle/straight-spindle-range/straight-spindle-range.component';
import {PalletComponent} from './its-elements/pallet/pallet.component';
import {MachineToolSpecificationLayoutComponent} from './shared/machine-tool-specification-layout/machine-tool-specification-layout.component';

const routes: Routes = [
  {
    path: '', component: MachineToolSpecificationLayoutComponent, children: [

    {path: '', component: MachineToolSpecificationComponent},
    {path: 'installation', component: InstallationComponent},
    {path: 'machining-capabilities', component: MachiningCapabilitiesComponent},
    {path: 'standard-machining-process', component: StandardMachiningProcessComponent},
    {path: 'its-elements', component: ItsElementsComponent},
    {path: 'its-elements/:machineToolElementId/bar-feeders', component: BarFeederComponent},
    {path: 'its-elements/:machineToolElementId/tailstocks', component: TailstockComponent},
    {path: 'its-elements/:machineToolElementId/collets', component: ColletComponent},
    {path: 'its-elements/:machineToolElementId/chucks', component: ChuckComponent},
    {path: 'its-elements/:machineToolElementId/tool-breakages', component: ToolBreakageComponent},
    {path: 'its-elements/:machineToolElementId/part-probes', component: PartProbeComponent},
    {path: 'its-elements/:machineToolElementId/tool-settings', component: ToolSettingComponent},
    {path: 'its-elements/:machineToolElementId/collants', component: CoolantComponent},
    {path: 'its-elements/:machineToolElementId/machine-tool-axis', component: MachineToolAxisComponent},
    {path: 'its-elements/:machineToolElementId/linear-axis', component: LinearAxisComponent},
    {path: 'its-elements/:machineToolElementId/continuous-rotary', component: ContinuousRotaryComponent},
    {path: 'its-elements/:machineToolElementId/indexing', component: IndexingComponent},
    {path: 'its-elements/:machineToolElementId/limited-swing', component: LimitedSwingComponent},
    {path: 'its-elements/:machineToolElementId/pallet', component: PalletComponent},
    {path: 'its-elements/:machineToolElementId/rectangular-work-tables', component: RectangularWorkTableComponent},
    {path: 'its-elements/:machineToolElementId/circular-work-table', component: CircularWorkTableComponent},
    {path: 'its-elements/:machineToolElementId/tool-changer', component: ToolChangerComponent},
    {path: 'its-elements/:machineToolElementId/rectangular-work-table', component: RectangularWorkTableComponent},
    {path: 'its-elements/:machineToolElementId/turret', component: TurretComponent},
    {path: 'its-elements/:machineToolElementId/turret/:turretId/turret-contents', component: TurretContentsComponent},
    {path: 'its-elements/:machineToolElementId/tool-magazine', component: ToolMagazineComponent},
    {
      path: 'its-elements/:machineToolElementId/tool-magazine/:toolMagazineId/tool-magazine-contents',
      component: ToolMagazineContentsComponent
    },
    {path: 'its-elements/:machineToolElementId/spindle', component: SpindleComponent},
    {path: 'its-elements/:machineToolElementId/spindle/:spindleId/range', component: SpindleRangeComponent},
    {path: 'its-elements/:machineToolElementId/work-spindle', component: WorkSpindleComponent},
    {path: 'its-elements/:machineToolElementId/work-spindle/:spindleId/range', component: WorkSpindleRangeComponent},
    {path: 'its-elements/:machineToolElementId/tapered-spindle', component: TaperedSpindleComponent},
    {path: 'its-elements/:machineToolElementId/tapered-spindle/:spindleId/range', component: TaperedSpindleRangeComponent},
    {path: 'its-elements/:machineToolElementId/straight-spindle', component: StraightSpindleComponent},
    {path: 'its-elements/:machineToolElementId/straight-spindle/:spindleId/range', component: StraightSpindleRangeComponent},
    {path: 'its-elements/:machineToolElementId/threaded-spindle', component: ThreadedSpindleComponent},
    {path: 'its-elements/:machineToolElementId/threaded-spindle/:spindleId/range', component: ThreadedSpindleRangeComponent},

  ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineToolSpecificationRoutingModule {
}
