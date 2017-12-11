import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineToolRequirementComponent} from './machine-tool-requirement/machine-tool-requirement.component';

const routes: Routes = [
  {path: 'machine-tool-requirement/:machineToolRequirementId', component: MachineToolRequirementComponent},
  {path: 'machine-tool-requirement', component: MachineToolRequirementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
