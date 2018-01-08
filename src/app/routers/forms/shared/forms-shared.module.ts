import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {FormArrayComponent} from './components/form-array/form-array.component';
import {FormHrefComponent} from './components/form-href/form-href.component';
import {MachineToolAxisFormComponent} from './forms/machine-tool-axis-form/machine-tool-axis-form.component';
import {LinearAxisFormComponent} from './forms/linear-axis-form/linear-axis-form.component';
import {RotaryAxisFormComponent} from './forms/rotary-axis-form/rotary-axis-form.component';
import {ContinuousRotaryFormComponent} from './forms/continuous-rotary-form/continuous-rotary-form.component';
import {IndexingFormComponent} from './forms/indexing-form/indexing-form.component';
import {LimitedSwingFormComponent} from './forms/limited-swing-form/limited-swing-form.component';
import {TSlotFormComponent} from './forms/t-slot-form/t-slot-form.component';
import {PalletFormComponent} from './forms/pallet-form/pallet-form.component';
import {WorkTableFormComponent} from './forms/work-table-form/work-table-form.component';
import {CircularWorkTableFormComponent} from './forms/circular-work-table-form/circular-work-table-form.component';
import {RectangularWorkTableFormComponent} from './forms/rectangular-work-table-form/rectangular-work-table-form.component';
import {TurretFormComponent} from './forms/turret-form/turret-form.component';
import {ToolHandlingUnitFormComponent} from './forms/tool-handling-unit-form/tool-handling-unit-form.component';
import {ToolChangerFormComponent} from './forms/tool-changer-form/tool-changer-form.component';
import {InputArrayComponent} from './components/input-array/input-array.component';
import {ToolMagazineFormComponent} from './forms/tool-magazine-form/tool-magazine-form.component';
import {ToolAssemblyFormComponent} from './forms/tool-assembly-form/tool-assembly-form.component';
import {SpindleFormComponent} from './forms/spindle-form/spindle-form.component';
import {SpindleRangeFormComponent} from './forms/spindle-range-form/spindle-range-form.component';
import {WorkSpindleFormComponent} from './forms/work-spindle-form/work-spindle-form.component';
import {ToolSpindleFormComponent} from './forms/tool-spindle-form/tool-spindle-form.component';
import {TaperedSpindleFormComponent} from './forms/tapered-spindle-form/tapered-spindle-form.component';
import {StraightSpindleFormComponent} from './forms/straight-spindle-form/straight-spindle-form.component';
import {ThreadedSpindleFormComponent} from './forms/threaded-spindle-form/threaded-spindle-form.component';
import {DeviceIdFormComponent} from './forms/device-id-form/device-id-form.component';
import {MeasuringCapabilityFormComponent} from './forms/measuring-capability-form/measuring-capability-form.component';
import {LocationFormComponent} from './forms/location-form/location-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
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
    TurretFormComponent,
    ToolHandlingUnitFormComponent,
    ToolChangerFormComponent,
    InputArrayComponent,
    ToolMagazineFormComponent,
    ToolAssemblyFormComponent,
    SpindleFormComponent,
    SpindleRangeFormComponent,
    WorkSpindleFormComponent,
    ToolSpindleFormComponent,
    TaperedSpindleFormComponent,
    StraightSpindleFormComponent,
    ThreadedSpindleFormComponent,
    DeviceIdFormComponent,
    MeasuringCapabilityFormComponent,
    LocationFormComponent
  ],
  exports: [
    CardComponent,
    MachineToolSpecificationFormComponent,
    KeysPipe,
    ReactiveFormsModule,
    MachiningCapabilityFormComponent,
    RouterOutletComponent,
    ChuckFormComponent,
    InputComponent,
    FormComponent,
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
    TurretFormComponent,
    ToolChangerFormComponent,
    InputArrayComponent,
    ToolMagazineFormComponent,
    ToolAssemblyFormComponent,
    SpindleFormComponent,
    SpindleRangeFormComponent,
    WorkSpindleFormComponent,
    ToolSpindleFormComponent,
    TaperedSpindleFormComponent,
    StraightSpindleFormComponent,
    ThreadedSpindleFormComponent,
    DeviceIdFormComponent,
    MeasuringCapabilityFormComponent,
    LocationFormComponent
  ]
})
export class FormsSharedModule {
}
