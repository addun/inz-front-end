import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItsElementsRoutingModule} from './its-elements-routing.module';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsSharedModule} from '../../shared/forms-shared.module';
import {ItsElementsComponent} from './its-elements.component';
import { TailstockComponent } from './tailstock/tailstock.component';
import { ColletComponent } from './collet/collet.component';
import { ChuckComponent } from './chuck/chuck.component';
import { ToolBreakageComponent } from './tool-breakage/tool-breakage.component';
import { PartProbeComponent } from './part-probe/part-probe.component';
import { ToolSettingComponent } from './tool-setting/tool-setting.component';
import { CoolantComponent } from './coolant/coolant.component';
import { MachineToolAxisComponent } from './machine-tool-axis/machine-tool-axis.component';
import { LinearAxisComponent } from './linear-axis/linear-axis.component';
import { ContinuousRotaryComponent } from './continuous-rotary/continuous-rotary.component';
import { IndexingComponent } from './indexing/indexing.component';
import { LimitedSwingComponent } from './limited-swing/limited-swing.component';
import { PalletComponent } from './pallet/pallet.component';

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
  ]
})
export class ItsElementsModule {
}
