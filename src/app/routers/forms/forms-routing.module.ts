import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  }
  // {
  //   path: '',
  //   component: FormsComponent,
  //   // canActivate: [FormGuard],
  //   // canActivateChild: [FormGuard],
  //   data: {
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
  //       data: {
  //         breadcrumb: 'Installation'
  //       },
  //     },
  //     {
  //       path: 'machining-capabilities',
  //       component: MachiningCapabilitiesComponent,
  //       data: {
  //         breadcrumb: 'Machining Capabilities'
  //       },
  //     },
  //     {
  //       path: 'standard-machining-process',
  //       component: StandardMachiningProcessComponent,
  //       data: {
  //         breadcrumb: 'Standard Machining Process'
  //       },
  //     },
  //     {
  //       path: 'its-elements',
  //       component: RouterOutletComponent,
  //       loadChildren: './machine-tool-specification/its-elements/its-elements.module#ItsElementsModule',
  //       data: {
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
