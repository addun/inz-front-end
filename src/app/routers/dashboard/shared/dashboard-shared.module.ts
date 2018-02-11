import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardService} from './services/dashboard/dashboard.service';
import {TreeNodeComponent} from './components/tree-node/tree-node.component';
import {FolderTreeComponent} from './components/tree/tree.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormRecorsTableComponent} from '../../forms/shared/components/form-recors-table/form-recors-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    DashboardService
  ],
  declarations: [
    FolderTreeComponent,
    TreeNodeComponent,
    FormRecorsTableComponent
  ],
  exports: [
    FolderTreeComponent,
    FormRecorsTableComponent
  ]
})
export class DashboardSharedModule {
}
