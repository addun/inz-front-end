import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule} from '@angular/router';
import {BreadcrumbsModule} from 'ng2-breadcrumbs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbsModule,
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
