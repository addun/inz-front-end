import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {FormService} from '../forms/shared/services/form/form.service';
import {FolderTreeModule} from './libs/folder-tree/folder-tree.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FolderTreeModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    FormService
  ]
})
export class DashboardModule {
}
