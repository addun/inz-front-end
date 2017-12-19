import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItsElementsRoutingModule} from './its-elements-routing.module';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsSharedModule} from '../../shared/forms-shared.module';
import {ItsElementsComponent} from './its-elements.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsSharedModule,
    ItsElementsRoutingModule,
  ],
  declarations: [
    ItsElementsComponent,
    BarFeederComponent]
})
export class ItsElementsModule {
}
