import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardService} from './services/dashboard/dashboard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DashboardService
  ],
  declarations: []
})
export class DashboardSharedModule {
}
