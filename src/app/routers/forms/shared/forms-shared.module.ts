import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {KeysPipe} from './pipes/keys/keys.pipe';
import {CardComponent} from './components/card/card.component';
import {MachineToolSpecificationFormComponent} from './forms/machine-tool-specification-form/machine-tool-specification-form.component';
import {MachiningCapabilityFormComponent} from './forms/machining-capability-form/machining-capability-form.component';
import {RouterOutletComponent} from './components/router-outlet/router-outlet.component';
import {SharedModule} from '../../../shared/shared.module';
import {ChuckFormComponent} from './forms/chuck-form/chuck-form.component';
import {InputComponent} from './components/input/input.component';
import {FormComponent} from './components/form/form.component';
import {DeviceIdControlsComponent} from './controls/device-id-controls/device-id-controls.component';
import {LocationControlsComponent} from './controls/location-controls/location-controls.component';
import {FormArrayComponent} from './components/form-array/form-array.component';
import {FormHrefComponent} from './components/form-href/form-href.component';
import { MachineToolAxisFormComponent } from './forms/machine-tool-axis-form/machine-tool-axis-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    KeysPipe,
    CardComponent,
    MachineToolSpecificationFormComponent,
    MachiningCapabilityFormComponent,
    RouterOutletComponent,
    ChuckFormComponent,
    InputComponent,
    FormComponent,
    DeviceIdControlsComponent,
    LocationControlsComponent,
    FormArrayComponent,
    FormHrefComponent,
    MachineToolAxisFormComponent,
  ],
  exports: [
    CardComponent,
    MachineToolSpecificationFormComponent,
    KeysPipe,
    ReactiveFormsModule,
    NgbModule,
    MachiningCapabilityFormComponent,
    RouterOutletComponent,
    ChuckFormComponent,
    InputComponent,
    FormComponent,
    DeviceIdControlsComponent,
    LocationControlsComponent,
    FormArrayComponent,
    FormHrefComponent,
  ]
})
export class FormsSharedModule {
}
