import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsLayoutComponent} from './shared/components/forms-layout/forms-layout.component';
import {FormCreateComponent} from './form-create/form-create.component';
import {RecordManageComponent} from './record-manage/record-manage.component';

const routes: Routes = [
  {
    path: '',
    component: FormsLayoutComponent,
    children: [
      {path: 'create', component: FormCreateComponent},
      {path: ':form/records/add', component: RecordManageComponent},
      {path: ':form/records/:record/edit', component: RecordManageComponent},
      {
        path: 'predefined/machine-tool-specification',
        loadChildren: './machine-tool-specification/machine-tool-specification.module#MachineToolSpecificationModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
