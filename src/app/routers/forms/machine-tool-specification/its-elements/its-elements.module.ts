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
    ToolSettingComponent]
})
export class ItsElementsModule {
}
