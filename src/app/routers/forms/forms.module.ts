import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {FormsRoutingModule} from './forms-routing.module';
import {MachineToolSpecificationService} from './machine-tool-specification/shared/services/machine-tool-specification/machine-tool-specification.service';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';
import {FormsSharedModule} from './shared/forms-shared.module';
import {DeviceIdComponent} from './machine-tool-specification/device-id/device-id.component';
import {SharedModule} from '../../shared/shared.module';
import { LocationComponent } from './machine-tool-specification/location/location.component';
import { InstallationComponent } from './machine-tool-specification/installation/installation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsSharedModule,
    SharedModule,
  ],
  declarations: [
    FormsComponent,
    MachineToolSpecificationComponent,
    MachiningCapabilitiesComponent,
    DeviceIdComponent,
    LocationComponent,
    InstallationComponent,
  ],
  providers: [
    MachineToolSpecificationService,
    FormToastService,
    TreeService
  ]
})
export class FormsModule {
}
