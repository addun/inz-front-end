import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {FormDataComponent} from './form-data/form-data.component';
import {FormsLayoutComponent} from './forms-layout/forms-layout.component';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {InstallationComponent} from './machine-tool-specification/installation/installation.component';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';
import {StandardMachiningProcessComponent} from './machine-tool-specification/standard-machining-process/standard-machining-process.component';

const routes: Routes = [
  {
    path: '',
    component: FormsLayoutComponent,
    children: [
      {path: 'create', component: CreateComponent},
      {path: ':form/records/add', component: FormDataComponent},
      {path: ':form/records/:record/edit', component: FormDataComponent},
    ]
  },
  {
    path: 'predefined/machine-tool-specification',
    component: FormsLayoutComponent,
    // canActivate: [FormGuard],
    // canActivateChild: [FormGuard],
    children: [
      {path: '', component: MachineToolSpecificationComponent},
      {path: 'installation', component: InstallationComponent},
      {path: 'machining-capabilities', component: MachiningCapabilitiesComponent},
      {path: 'standard-machining-process', component: StandardMachiningProcessComponent},
      {
        path: 'its-elements',
        loadChildren: './machine-tool-specification/its-elements/its-elements.module#ItsElementsModule',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
