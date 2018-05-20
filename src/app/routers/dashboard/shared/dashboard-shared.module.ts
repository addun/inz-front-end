import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormRecorsTableComponent} from '../../forms/shared/components/form-recors-table/form-recors-table.component';
import {FolderFormModalComponent} from './components/folder-form-modal/folder-form-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    FolderFormModalComponent
  ],
  declarations: [
    FormRecorsTableComponent,
    FolderFormModalComponent,
  ],
  exports: [
    FormRecorsTableComponent,
    FolderFormModalComponent
  ]
})
export class DashboardSharedModule {
}
