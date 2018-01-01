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
import {MachineToolAxisFormComponent} from './forms/machine-tool-axis-form/machine-tool-axis-form.component';
import {LinearAxisFormComponent} from './forms/linear-axis-form/linear-axis-form.component';
import {RotaryAxisFormComponent} from './forms/rotary-axis-form/rotary-axis-form.component';
import {ContinuousRotaryFormComponent} from './forms/continuous-rotary-form/continuous-rotary-form.component';
import {IndexingFormComponent} from './forms/indexing-form/indexing-form.component';
import {LimitedSwingFormComponent} from './forms/limited-swing-form/limited-swing-form.component';
import { TSlotFormComponent } from './forms/t-slot-form/t-slot-form.component';
import { PalletFormComponent } from './forms/pallet-form/pallet-form.component';
import { WorkTableFormComponent } from './forms/work-table-form/work-table-form.component';
import { CircularWorkTableFormComponent } from './forms/circular-work-table-form/circular-work-table-form.component';
import { RectangularWorkTableFormComponent } from './forms/rectangular-work-table-form/rectangular-work-table-form.component';

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
    LinearAxisFormComponent,
    RotaryAxisFormComponent,
    ContinuousRotaryFormComponent,
    IndexingFormComponent,
    LimitedSwingFormComponent,
    TSlotFormComponent,
    PalletFormComponent,
    WorkTableFormComponent,
    CircularWorkTableFormComponent,
    RectangularWorkTableFormComponent,
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
    MachineToolAxisFormComponent,
    LinearAxisFormComponent,
    RotaryAxisFormComponent,
    ContinuousRotaryFormComponent,
    IndexingFormComponent,
    LimitedSwingFormComponent,
    PalletFormComponent,
    CircularWorkTableFormComponent,
    RectangularWorkTableFormComponent,
  ]
})
export class FormsSharedModule {
}
