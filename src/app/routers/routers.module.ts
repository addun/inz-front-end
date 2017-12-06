import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoutersRoutingModule} from './routers-routing.module';
import {RoutersComponent} from './routers.component';

@NgModule({
  imports: [
    CommonModule,
    RoutersRoutingModule,
  ],
  declarations: [
    RoutersComponent
  ]
})
export class RoutersModule {
}
