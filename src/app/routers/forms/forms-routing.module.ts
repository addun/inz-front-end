import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {FormDataComponent} from './form-data/form-data.component';
import {FormsLayoutComponent} from './forms-layout/forms-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FormsLayoutComponent,
    children: [
      {path: 'create', component: CreateComponent},
      {path: ':form/records/add', component: FormDataComponent},
      {path: ':form/records/:record/edit', component: FormDataComponent},
    ]
  }
  // {
  //   path: '',
  //   component: FormsComponent,
  //   // canActivate: [FormGuard],
  //   // canActivateChild: [FormGuard],
  //   record: {
  //     breadcrumb: 'Machine Tool Specification'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       component: MachineToolSpecificationComponent
  //     },
  //     {
  //       path: 'installation',
  //       component: InstallationComponent,
  //       record: {
  //         breadcrumb: 'Installation'
  //       },
  //     },
  //     {
  //       path: 'machining-capabilities',
  //       component: MachiningCapabilitiesComponent,
  //       record: {
  //         breadcrumb: 'Machining Capabilities'
  //       },
  //     },
  //     {
  //       path: 'standard-machining-process',
  //       component: StandardMachiningProcessComponent,
  //       record: {
  //         breadcrumb: 'Standard Machining Process'
  //       },
  //     },
  //     {
  //       path: 'its-elements',
  //       component: RouterOutletComponent,
  //       loadChildren: './machine-tool-specification/its-elements/its-elements.module#ItsElementsModule',
  //       record: {
  //         breadcrumb: 'Its Elements'
  //       },
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
