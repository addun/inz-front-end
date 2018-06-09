import {CommonModule} from '@angular/common';
import {FormsDisplayComponent} from './components/forms-display/forms-display.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [
    FormsDisplayComponent
  ],
  exports: [
    FormsDisplayComponent
  ]
})
export class FormsDisplayModule {
}
