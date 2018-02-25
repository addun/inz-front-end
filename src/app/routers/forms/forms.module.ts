import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {FormsRoutingModule} from './forms-routing.module';
import {FormsSharedModule} from './shared/forms-shared.module';
import {SharedModule} from '../../shared/shared.module';
import {FormService} from './shared/services/form/form.service';
import {FormCreateComponent} from './form-create/form-create.component';
import {RecordManageComponent} from './record-manage/record-manage.component';
import {FormsLayoutComponent} from './shared/components/forms-layout/forms-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsSharedModule,
    SharedModule,
  ],
  declarations: [
    FormsComponent,
    FormCreateComponent,
    RecordManageComponent,
    FormsLayoutComponent
  ],
  providers: [
    FormToastService,
    FormService,
  ]
})
export class FormsModule {
}
