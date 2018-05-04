import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoutersRoutingModule} from './routers-routing.module';
import {RoutersComponent} from './routers.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutersRoutingModule,
  ],
  declarations: [
    RoutersComponent
  ],
  providers: []
})
export class RoutersModule {
}
