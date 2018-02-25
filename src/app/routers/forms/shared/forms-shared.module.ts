import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {FormComponent} from './components/form/form.component';
import {CardComponent} from './components/card/card.component';
import {FormArrayComponent} from './components/form-array/form-array.component';
import {InputComponent} from './components/input/input.component';
import {KeysPipe} from './pipes/keys/keys.pipe';
import {FormHrefComponent} from './components/form-href/form-href.component';
import {InputArrayComponent} from './components/input-array/input-array.component';

const decelerateAndExport = [
  KeysPipe,
  FormArrayComponent,
  FormComponent,
  InputComponent,
  CardComponent,
  FormComponent,
  CardComponent,
  FormHrefComponent,
  InputArrayComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...decelerateAndExport
  ],
  exports: [
    SharedModule,
    ...decelerateAndExport
  ]
})
export class FormsSharedModule {
}
