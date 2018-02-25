import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MachineToolSpecificationRoutingModule} from './machine-tool-specification-routing.module';
import {MachineToolSpecificationFormComponent} from './shared/forms/machine-tool-specification-form/machine-tool-specification-form.component';
import {MachiningCapabilityFormComponent} from './shared/forms/machining-capability-form/machining-capability-form.component';
import {ChuckFormComponent} from './shared/forms/chuck-form/chuck-form.component';
import {MachineToolAxisFormComponent} from './shared/forms/machine-tool-axis-form/machine-tool-axis-form.component';
import {LinearAxisFormComponent} from './shared/forms/linear-axis-form/linear-axis-form.component';
import {ContinuousRotaryFormComponent} from './shared/forms/continuous-rotary-form/continuous-rotary-form.component';
import {LimitedSwingFormComponent} from './shared/forms/limited-swing-form/limited-swing-form.component';
import {IndexingFormComponent} from './shared/forms/indexing-form/indexing-form.component';
import {TSlotFormComponent} from './shared/forms/t-slot-form/t-slot-form.component';
import {PalletFormComponent} from './shared/forms/pallet-form/pallet-form.component';
import {WorkTableFormComponent} from './shared/forms/work-table-form/work-table-form.component';
import {TaperedSpindleFormComponent} from './shared/forms/tapered-spindle-form/tapered-spindle-form.component';
import {StraightSpindleFormComponent} from './shared/forms/straight-spindle-form/straight-spindle-form.component';
import {ThreadedSpindleFormComponent} from './shared/forms/threaded-spindle-form/threaded-spindle-form.component';
import {MeasuringCapabilityFormComponent} from './shared/forms/measuring-capability-form/measuring-capability-form.component';
import {DeviceIdFormComponent} from './shared/forms/device-id-form/device-id-form.component';
import {LocationFormComponent} from './shared/forms/location-form/location-form.component';
import {RotaryAxisFormComponent} from './shared/forms/rotary-axis-form/rotary-axis-form.component';
import {RectangularWorkTableFormComponent} from './shared/forms/rectangular-work-table-form/rectangular-work-table-form.component';
import {CircularWorkTableFormComponent} from './shared/forms/circular-work-table-form/circular-work-table-form.component';
import {ToolHandlingUnitFormComponent} from './shared/forms/tool-handling-unit-form/tool-handling-unit-form.component';
import {ToolMagazineFormComponent} from './shared/forms/tool-magazine-form/tool-magazine-form.component';
import {SpindleFormComponent} from './shared/forms/spindle-form/spindle-form.component';
import {SpindleRangeFormComponent} from './shared/forms/spindle-range-form/spindle-range-form.component';
import {WorkSpindleFormComponent} from './shared/forms/work-spindle-form/work-spindle-form.component';
import {ToolAssemblyFormComponent} from './shared/forms/tool-assembly-form/tool-assembly-form.component';
import {ToolSpindleFormComponent} from './shared/forms/tool-spindle-form/tool-spindle-form.component';
import {TurretFormComponent} from './shared/forms/turret-form/turret-form.component';
import {ToolChangerFormComponent} from './shared/forms/tool-changer-form/tool-changer-form.component';
import {FormsSharedModule} from '../shared/forms-shared.module';
import {MachineToolSpecificationComponent} from './machine-tool-specification.component';
import {InstallationComponent} from './installation/installation.component';
import {StandardMachiningProcessComponent} from './standard-machining-process/standard-machining-process.component';
import {MachiningCapabilitiesComponent} from './machining-capabilities/machining-capabilities.component';
import {ItsElementsComponent} from './its-elements/its-elements.component';
import {TailstockComponent} from './its-elements/tailstock/tailstock.component';
import {ColletComponent} from './its-elements/collet/collet.component';
import {ChuckComponent} from './its-elements/chuck/chuck.component';
import {ToolBreakageComponent} from './its-elements/tool-breakage/tool-breakage.component';
import {PartProbeComponent} from './its-elements/part-probe/part-probe.component';
import {ToolSettingComponent} from './its-elements/tool-setting/tool-setting.component';
import {CoolantComponent} from './its-elements/coolant/coolant.component';
import {MachineToolAxisComponent} from './its-elements/machine-tool-axis/machine-tool-axis.component';
import {LinearAxisComponent} from './its-elements/linear-axis/linear-axis.component';
import {ContinuousRotaryComponent} from './its-elements/continuous-rotary/continuous-rotary.component';
import {IndexingComponent} from './its-elements/indexing/indexing.component';
import {LimitedSwingComponent} from './its-elements/limited-swing/limited-swing.component';
import {PalletComponent} from './its-elements/pallet/pallet.component';
import {CircularWorkTableComponent} from './its-elements/circular-work-table/circular-work-table.component';
import {RectangularWorkTableComponent} from './its-elements/rectangular-work-table/rectangular-work-table.component';
import {TurretComponent} from './its-elements/turret/turret.component';
import {ToolChangerComponent} from './its-elements/tool-changer/tool-changer.component';
import {ToolMagazineComponent} from './its-elements/tool-magazine/tool-magazine.component';
import {TurretContentsComponent} from './its-elements/turret/turret-contents/turret-contents.component';
import {ToolMagazineContentsComponent} from './its-elements/tool-magazine/tool-magazine-contents/tool-magazine-contents.component';
import {SpindleComponent} from './its-elements/spindle/spindle.component';
import {SpindleRangeComponent} from './its-elements/spindle/spindle-range/spindle-range.component';
import {WorkSpindleComponent} from './its-elements/work-spindle/work-spindle.component';
import {TaperedSpindleComponent} from './its-elements/tapered-spindle/tapered-spindle.component';
import {StraightSpindleComponent} from './its-elements/straight-spindle/straight-spindle.component';
import {ThreadedSpindleComponent} from './its-elements/threaded-spindle/threaded-spindle.component';
import {WorkSpindleRangeComponent} from './its-elements/work-spindle/work-spindle-range/work-spindle-range.component';
import {ThreadedSpindleRangeComponent} from './its-elements/threaded-spindle/threaded-spindle-range/threaded-spindle-range.component';
import {StraightSpindleRangeComponent} from './its-elements/straight-spindle/straight-spindle-range/straight-spindle-range.component';
import {TaperedSpindleRangeComponent} from './its-elements/tapered-spindle/tapered-spindle-range/tapered-spindle-range.component';
import {BarFeederComponent} from './its-elements/bar-feeder/bar-feeder.component';
import {MachineToolSpecificationFormService} from './shared/services/machine-tool-specification-form/machine-tool-specification-form.service';
import { MachineToolSpecificationLayoutComponent } from './shared/machine-tool-specification-layout/machine-tool-specification-layout.component';


@NgModule({
  imports: [
    CommonModule,
    FormsSharedModule,
    MachineToolSpecificationRoutingModule
  ],
  declarations: [
    StandardMachiningProcessComponent,
    MachiningCapabilitiesComponent,
    InstallationComponent,
    MachineToolSpecificationComponent,
    MachineToolSpecificationFormComponent,
    MachiningCapabilityFormComponent,
    ChuckFormComponent,
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
    LocationFormComponent,
    ChuckFormComponent,
    ItsElementsComponent,
    BarFeederComponent,
    TailstockComponent,
    ColletComponent,
    ChuckComponent,
    ToolBreakageComponent,
    PartProbeComponent,
    ToolSettingComponent,
    CoolantComponent,
    MachineToolAxisComponent,
    LinearAxisComponent,
    ContinuousRotaryComponent,
    IndexingComponent,
    LimitedSwingComponent,
    PalletComponent,
    CircularWorkTableComponent,
    RectangularWorkTableComponent,
    TurretComponent,
    ToolChangerComponent,
    ToolMagazineComponent,
    TurretContentsComponent,
    ToolMagazineContentsComponent,
    SpindleComponent,
    SpindleRangeComponent,
    WorkSpindleComponent,
    TaperedSpindleComponent,
    StraightSpindleComponent,
    ThreadedSpindleComponent,
    WorkSpindleRangeComponent,
    ThreadedSpindleRangeComponent,
    StraightSpindleRangeComponent,
    TaperedSpindleRangeComponent,
    MachineToolSpecificationLayoutComponent,
  ],
  providers: [
    MachineToolSpecificationFormService
  ]
})
export class MachineToolSpecificationModule {
}



