import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormHeadingComponent} from './components/form-heading/form-heading.component';
import {AddItemComponent} from './components/add-item/add-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {KeysPipe} from './pipes/keys/keys.pipe';
import {CardComponent} from './components/card/card.component';
import {DeviceIdFormComponent} from './forms/device-id-form/device-id-form.component';
import {MachineToolSpecificationFormComponent} from './forms/machine-tool-specification-form/machine-tool-specification-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    FormHeadingComponent,
    AddItemComponent,
    KeysPipe,
    CardComponent,
    DeviceIdFormComponent,
    MachineToolSpecificationFormComponent,
  ],
  exports: [
    FormHeadingComponent,
    AddItemComponent,
    CardComponent,
    DeviceIdFormComponent,
    MachineToolSpecificationFormComponent,
    KeysPipe,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class FormsSharedModule {
}
