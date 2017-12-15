import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {DynamicFormsBootstrapUIModule} from '@ng-dynamic-forms/ui-bootstrap';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {RouterModule} from '@angular/router';
import {FormsRoutingModule} from './forms-routing.module';
import { DeviceIdComponent } from './machine-tool-specification/device-id/device-id.component';
import { FormHeadingComponent } from './shared/components/form-heading/form-heading.component';
import { MachiningCapabilityComponent } from './machine-tool-specification/machining-capability/machining-capability.component';
import { MeasuringCapabilityComponent } from './machine-tool-specification/measuring-capability/measuring-capability.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
  ],
  declarations: [FormsComponent, MachineToolSpecificationComponent, DeviceIdComponent, FormHeadingComponent, MachiningCapabilityComponent, MeasuringCapabilityComponent],
  providers: [
    FormToastService,
    TreeService
  ]
})
export class FormsModule {
}
