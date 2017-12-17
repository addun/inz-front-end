import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {RouterModule} from '@angular/router';
import {FormsRoutingModule} from './forms-routing.module';
import {MeasuringCapabilityComponent} from './machine-tool-specification/measuring-capability/measuring-capability.component';
import {InstallationComponent} from './machine-tool-specification/installation/installation.component';
import {LocatorComponent} from './machine-tool-specification/locator/locator.component';
import {MachineToolSpecificationService} from './machine-tool-specification/shared/services/machine-tool-specification/machine-tool-specification.service';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';
import {FormsSharedModule} from './shared/forms-shared.module';
import {MachineToolElementsService} from './machine-tool-specification/machine-tool-elements/shared/services/machine-tool-elements/machine-tool-elements.service';
import { DeviceIdComponent } from './machine-tool-specification/device-id/device-id.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsRoutingModule,
    FormsSharedModule
  ],
  declarations: [
    FormsComponent,
    MachineToolSpecificationComponent,
    MachiningCapabilitiesComponent,
    MeasuringCapabilityComponent,
    InstallationComponent,
    LocatorComponent,
    DeviceIdComponent,
  ],
  providers: [
    MachineToolSpecificationService,
    MachineToolElementsService,
    FormToastService,
    TreeService
  ]
})
export class FormsModule {
}
