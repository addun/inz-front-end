import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {RouterModule} from '@angular/router';
import {FormsRoutingModule} from './forms-routing.module';
import {MachineToolSpecificationService} from './machine-tool-specification/shared/services/machine-tool-specification/machine-tool-specification.service';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';
import {FormsSharedModule} from './shared/forms-shared.module';
import {DeviceIdComponent} from './machine-tool-specification/device-id/device-id.component';
import {SharedModule} from '../../shared/shared.module';
import { ItsElementsComponent } from './machine-tool-specification/its-elements/its-elements.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsRoutingModule,
    FormsSharedModule,
    SharedModule,
  ],
  declarations: [
    FormsComponent,
    MachineToolSpecificationComponent,
    MachiningCapabilitiesComponent,
    DeviceIdComponent,
    ItsElementsComponent,
  ],
  providers: [
    MachineToolSpecificationService,
    FormToastService,
    TreeService
  ]
})
export class FormsModule {
}
