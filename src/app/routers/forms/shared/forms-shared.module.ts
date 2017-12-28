import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddItemComponent} from './components/add-item/add-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {KeysPipe} from './pipes/keys/keys.pipe';
import {CardComponent} from './components/card/card.component';
import {DeviceIdFormComponent} from './forms/device-id-form/device-id-form.component';
import {MachineToolSpecificationFormComponent} from './forms/machine-tool-specification-form/machine-tool-specification-form.component';
import {MachiningCapabilityFormComponent} from './forms/machining-capability-form/machining-capability-form.component';
import {FieldsetComponent} from './components/fieldset/fieldset.component';
import {RouterOutletComponent} from './components/router-outlet/router-outlet.component';
import {SharedModule} from '../../../shared/shared.module';
import {CardActionComponent} from './components/card-action/card-action.component';
import {ArrayActionComponent} from './components/array-action/array-action.component';
import {ChuckFormComponent} from './forms/chuck-form/chuck-form.component';
import {MachineToolAxisFormComponent} from './forms/machine-tool-axis-form/machine-tool-axis-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AddItemComponent,
    KeysPipe,
    CardComponent,
    DeviceIdFormComponent,
    MachineToolSpecificationFormComponent,
    MachiningCapabilityFormComponent,
    FieldsetComponent,
    RouterOutletComponent,
    CardActionComponent,
    ArrayActionComponent,
    ChuckFormComponent,
    MachineToolAxisFormComponent,
  ],
  exports: [
    AddItemComponent,
    CardComponent,
    DeviceIdFormComponent,
    MachineToolSpecificationFormComponent,
    KeysPipe,
    ReactiveFormsModule,
    NgbModule,
    MachiningCapabilityFormComponent,
    FieldsetComponent,
    RouterOutletComponent,
    CardActionComponent,
    ArrayActionComponent,
    ChuckFormComponent,
    MachineToolAxisFormComponent
  ]
})
export class FormsSharedModule {
}
