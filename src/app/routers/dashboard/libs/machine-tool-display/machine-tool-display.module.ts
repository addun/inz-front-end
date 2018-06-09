import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MachineToolDisplayComponent} from './components/machine-tool-display/machine-tool-display.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
  declarations: [MachineToolDisplayComponent],
  exports: [
    MachineToolDisplayComponent
  ]
})
export class MachineToolDisplayModule {
}
