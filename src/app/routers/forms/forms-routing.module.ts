import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsLayoutComponent} from './shared/components/forms-layout/forms-layout.component';
import {RecordCreateComponent} from './pages/record-create/record-create.component';
import {FormCreateComponent} from './pages/form-create/form-create.component';

const routes: Routes = [
  {
    path: '',
    component: FormsLayoutComponent,
    children: [
      {path: 'create', component: FormCreateComponent},
      {path: ':formId/records/add', component: RecordCreateComponent},
      {path: ':formId/records/:recordId/edit', component: RecordCreateComponent},
      {
        path: 'predefined/machine_tool_specification',
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
