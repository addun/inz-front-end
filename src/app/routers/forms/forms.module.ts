import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsComponent} from './forms.component';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {FormsRoutingModule} from './forms-routing.module';
import {FormsSharedModule} from './shared/forms-shared.module';
import {SharedModule} from '../../shared/shared.module';
import {FormService} from './shared/services/form/form.service';
import {FormsLayoutComponent} from './shared/components/forms-layout/forms-layout.component';
import { RecordCreateComponent } from './pages/record-create/record-create.component';
import {FormCreateComponent} from './pages/form-create/form-create.component';

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
    FormsLayoutComponent,
    RecordCreateComponent,
  ],
  providers: [
    FormToastService,
    FormService,
  ]
})
export class FormsModule {
}
