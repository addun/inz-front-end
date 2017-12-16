import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {DeviceIdComponent} from './machine-tool-specification/device-id/device-id.component';
import {MachiningCapabilityComponent} from './machine-tool-specification/machining-capability/machining-capability.component';
import {MeasuringCapabilityComponent} from './machine-tool-specification/measuring-capability/measuring-capability.component';
import {InstallationComponent} from './machine-tool-specification/installation/installation.component';
import {LocatorComponent} from './machine-tool-specification/locator/locator.component';
import {TailstockComponent} from './machine-tool-specification/machine-tool-element/tailstock/tailstock.component';
import {MachineToolElementComponent} from './machine-tool-specification/machine-tool-element/machine-tool-element.component';

const routes: Routes = [
  {
    path: 'machine-tool-specification',
    children: [
      {path: '', component: MachineToolSpecificationComponent},
      {path: 'device-id', component: DeviceIdComponent},
      {path: 'locator', component: LocatorComponent},
      {path: 'machining-capability', component: MachiningCapabilityComponent},
      {path: 'installation', component: InstallationComponent},
      {path: 'measuring-capability', component: MeasuringCapabilityComponent},
      {
        path: 'machine-tool-element',
        children: [
          {path: '', component: MachineToolElementComponent},
          {path: ':machineToolElementId/tailstock', component: TailstockComponent},
        ]
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
