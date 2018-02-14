import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsLayoutComponent} from './forms-layout.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FormsLayoutComponent
  ],
  declarations: [
    FormsLayoutComponent
  ]
})
export class FormsLayoutModule {
}
