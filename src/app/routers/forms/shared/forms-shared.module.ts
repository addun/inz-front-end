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

@NgModule({
  imports: [
    CommonModule,
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
  ]
})
export class FormsSharedModule {
}
