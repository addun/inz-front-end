import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TreeRoutingModule} from './tree-routing.module';
import {TreeComponent} from './tree.component';
import {TreeService} from './services/tree/tree.service';
import {TreeToastService} from './services/toast/tree-toast.service';
import {TreeModule  as TreePluginModule} from 'ng2-tree';
import {MachineToolSpecificationService} from '../forms/machine-tool-specification/shared/services';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TreeRoutingModule,
    TreePluginModule,
  ],
  declarations: [
    TreeComponent
  ],
  providers: [
    TreeService,
    TreeToastService,
    MachineToolSpecificationService
  ]
})
export class TreeModule {
}
