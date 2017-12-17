import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormHeadingComponent} from './components/form-heading/form-heading.component';
import {DynamicFormsBootstrapUIModule} from '@ng-dynamic-forms/ui-bootstrap';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {AddItemComponent} from './components/add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
  ],
  declarations: [
    FormHeadingComponent,
    AddItemComponent,
  ],
  exports: [
    FormHeadingComponent,
    AddItemComponent,
    DynamicFormsCoreModule,
    DynamicFormsBootstrapUIModule,
  ]
})
export class FormsSharedModule {
}
