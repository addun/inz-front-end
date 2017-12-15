import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {DeviceIdComponent} from './machine-tool-specification/device-id/device-id.component';
import {MachiningCapabilityComponent} from './machine-tool-specification/machining-capability/machining-capability.component';
import {MeasuringCapabilityComponent} from './machine-tool-specification/measuring-capability/measuring-capability.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {path: 'machine-tool-specification', component: MachineToolSpecificationComponent},
      {path: 'machine-tool-specification/device-id', component: DeviceIdComponent},
      {path: 'machine-tool-specification/machining-capability', component: MachiningCapabilityComponent},
      {path: 'machine-tool-specification/measuring-capability', component: MeasuringCapabilityComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
