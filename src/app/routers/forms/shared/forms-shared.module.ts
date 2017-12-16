import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormHeadingComponent} from './components/form-heading/form-heading.component';
import {DynamicFormsBootstrapUIModule} from '@ng-dynamic-forms/ui-bootstrap';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
  ],
  declarations: [
    FormHeadingComponent
  ],
  exports: [
    FormHeadingComponent,
    DynamicFormsCoreModule,
    DynamicFormsBootstrapUIModule,
  ]
})
export class FormsSharedModule {
}
