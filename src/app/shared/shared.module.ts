import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MachineToolRequirementsFormComponent} from './components/forms/machine-tool-requirements-form/machine-tool-requirements-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MachineToolRequirementsFormComponent
  ],
  exports: [
    MachineToolRequirementsFormComponent
  ]
})
export class SharedModule {
}
