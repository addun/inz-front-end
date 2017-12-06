import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';
import {MachineToolRequirementsFormComponent} from './shared/components/machine-tool-requirements-form/machine-tool-requirements-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {MachineToolRequirementService} from './shared/services/machine-tool-requirement/machine-tool-requirement.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ],
  declarations: [FormsComponent, MachineToolRequirementsFormComponent],
  providers: [
    MachineToolRequirementService,
    FormToastService
  ]
})
export class FormsModule {
}
