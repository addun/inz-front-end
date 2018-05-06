import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardService} from './services/dashboard/dashboard.service';
import {TreeNodeComponent} from './components/tree-node/tree-node.component';
import {FolderTreeComponent} from './components/tree/tree.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormRecorsTableComponent} from '../../forms/shared/components/form-recors-table/form-recors-table.component';
import {TreeService} from './services/tree/tree.service';
import {FolderFormModalComponent} from './components/folder-form-modal/folder-form-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    DashboardService,
    TreeService
  ],
  entryComponents: [
    FolderFormModalComponent
  ],
  declarations: [
    FolderTreeComponent,
    TreeNodeComponent,
    FormRecorsTableComponent,
    FolderFormModalComponent
  ],
  exports: [
    FolderTreeComponent,
    FormRecorsTableComponent,
    FolderFormModalComponent
  ]
})
export class DashboardSharedModule {
}
