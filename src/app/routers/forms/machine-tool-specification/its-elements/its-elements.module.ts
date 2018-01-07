import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItsElementsRoutingModule} from './its-elements-routing.module';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsSharedModule} from '../../shared/forms-shared.module';
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
import {PalletComponent} from './pallet/pallet.component';
import {CircularWorkTableComponent} from './circular-work-table/circular-work-table.component';
import {RectangularWorkTableComponent} from './rectangular-work-table/rectangular-work-table.component';
import {TurretComponent} from './turret/turret.component';
import {ToolChangerComponent} from './tool-changer/tool-changer.component';
import {ToolMagazineComponent} from './tool-magazine/tool-magazine.component';
import {TurretContentsComponent} from './turret/turret-contents/turret-contents.component';
import {ToolMagazineContentsComponent} from './tool-magazine/tool-magazine-contents/tool-magazine-contents.component';
import { SpindleComponent } from './spindle/spindle.component';
import { SpindleRangeComponent } from './spindle/spindle-range/spindle-range.component';
import { WorkSpindleComponent } from './work-spindle/work-spindle.component';
import { TaperedSpindleComponent } from './tapered-spindle/tapered-spindle.component';
import { StraightSpindleComponent } from './straight-spindle/straight-spindle.component';
import { ThreadedSpindleComponent } from './threaded-spindle/threaded-spindle.component';
import { WorkSpindleRangeComponent } from './work-spindle/work-spindle-range/work-spindle-range.component';
import { ThreadedSpindleRangeComponent } from './threaded-spindle/threaded-spindle-range/threaded-spindle-range.component';
import { StraightSpindleRangeComponent } from './straight-spindle/straight-spindle-range/straight-spindle-range.component';
import { TaperedSpindleRangeComponent } from './tapered-spindle/tapered-spindle-range/tapered-spindle-range.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsSharedModule,
    ItsElementsRoutingModule,
  ],
  declarations: [
    ItsElementsComponent,
    BarFeederComponent,
    TailstockComponent,
    ColletComponent,
    ChuckComponent,
    ToolBreakageComponent,
    PartProbeComponent,
    ToolSettingComponent,
    CoolantComponent,
    MachineToolAxisComponent,
    LinearAxisComponent,
    ContinuousRotaryComponent,
    IndexingComponent,
    LimitedSwingComponent,
    PalletComponent,
    CircularWorkTableComponent,
    RectangularWorkTableComponent,
    TurretComponent,
    ToolChangerComponent,
    ToolMagazineComponent,
    TurretContentsComponent,
    ToolMagazineContentsComponent,
    SpindleComponent,
    SpindleRangeComponent,
    WorkSpindleComponent,
    TaperedSpindleComponent,
    StraightSpindleComponent,
    ThreadedSpindleComponent,
    WorkSpindleRangeComponent,
    ThreadedSpindleRangeComponent,
    StraightSpindleRangeComponent,
    TaperedSpindleRangeComponent,
  ]
})
export class ItsElementsModule {
}
