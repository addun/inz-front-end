import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {DashboardSharedModule} from './shared/dashboard-shared.module';
import {FormService} from '../forms/shared/services/form/form.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    DashboardSharedModule
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
