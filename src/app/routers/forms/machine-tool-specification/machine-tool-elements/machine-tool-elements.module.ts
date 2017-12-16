import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MachineToolElementsRoutingModule} from './machine-tool-elements-routing.module';
import {TailstockComponent} from './tailstock/tailstock.component';
import {ColletComponent} from './collet/collet.component';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {MachineToolElementsComponent} from './machine-tool-elements.component';
import {FormsSharedModule} from '../../shared/forms-shared.module';
import { RouterOutletComponent } from './shared/components/router-outlet/router-outlet.component';

@NgModule({
  imports: [
    CommonModule,
    MachineToolElementsRoutingModule,
    FormsSharedModule
  ],
  declarations: [
    MachineToolElementsComponent,
    BarFeederComponent,
    ColletComponent,
    TailstockComponent,
    RouterOutletComponent,
  ]
})
export class MachineToolElementsModule {
}
