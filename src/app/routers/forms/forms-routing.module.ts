import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineToolRequirementComponent} from './machine-tool-requirement/machine-tool-requirement.component';
import {FormsComponent} from './forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {path: 'machine-tool-requirement/:machineToolRequirementId/change', component: MachineToolRequirementComponent},
      {path: 'machine-tool-requirement/add', component: MachineToolRequirementComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
