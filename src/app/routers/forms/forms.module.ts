import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsRoutingModule} from './forms-routing.module';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {MachineToolRequirementService} from './shared/services/machine-tool-requirement/machine-tool-requirement.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {SharedModule} from '../../shared/shared.module';
import { MachineToolRequirementComponent } from './machine-tool-requirement/machine-tool-requirement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ],
  declarations: [FormsComponent, MachineToolRequirementComponent],
  providers: [
    MachineToolRequirementService,
    FormToastService,
    TreeService
  ]
})
export class FormsModule {
}
