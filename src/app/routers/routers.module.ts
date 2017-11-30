import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoutersRoutingModule} from './routers-routing.module';
import {RoutersComponent} from './routers.component';
import {TreeModule} from 'angular-tree-component';
import {TreeService} from './tree/services/tree/tree.service';

@NgModule({
  imports: [
    CommonModule,
    RoutersRoutingModule,
    TreeModule
  ],
  declarations: [
    RoutersComponent
  ],
  providers: [
    TreeService
  ]
})
export class RoutersModule {
}
