import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TreeRoutingModule} from './tree-routing.module';
import {TreeComponent} from './tree.component';
import {TreeService} from './services/tree/tree.service';
import {TreeToastService} from './services/toast/tree-toast.service';
import {TreeModule  as TreePluginModule} from 'ng2-tree';

@NgModule({
  imports: [
    CommonModule,
    TreeRoutingModule,
    TreePluginModule,
  ],
  declarations: [TreeComponent],
  providers: [
    TreeService,
    TreeToastService
  ]
})
export class TreeModule {
}
