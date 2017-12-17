import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormHeadingComponent} from './components/form-heading/form-heading.component';
import {DynamicFormsBootstrapUIModule} from '@ng-dynamic-forms/ui-bootstrap';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {AddItemComponent} from './components/add-item/add-item.component';
import {DynamicFormsNGBootstrapUIModule} from '@ng-dynamic-forms/ui-ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsNGBootstrapUIModule,
    DynamicFormsBootstrapUIModule,
  ],
  declarations: [
    FormHeadingComponent,
    AddItemComponent,
  ],
  exports: [
    FormHeadingComponent,
    AddItemComponent,

    NgbModule,
    DynamicFormsCoreModule,
    DynamicFormsBootstrapUIModule,
    DynamicFormsNGBootstrapUIModule,
  ]
})
export class FormsSharedModule {
}
