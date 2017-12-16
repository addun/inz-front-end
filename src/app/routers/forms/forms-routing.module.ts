import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {DeviceIdComponent} from './machine-tool-specification/device-id/device-id.component';
import {MeasuringCapabilityComponent} from './machine-tool-specification/measuring-capability/measuring-capability.component';
import {InstallationComponent} from './machine-tool-specification/installation/installation.component';
import {LocatorComponent} from './machine-tool-specification/locator/locator.component';
import {TailstockComponent} from './machine-tool-specification/machine-tool-element/tailstock/tailstock.component';
import {MachineToolElementComponent} from './machine-tool-specification/machine-tool-element/machine-tool-element.component';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';

const routes: Routes = [
  {
    path: 'machine-tool-specification',
    data: {
      breadcrumb: 'Machine Tool Specification'
    },
    children: [
      {
        path: '',
        component: MachineToolSpecificationComponent,
      },
      {
        path: 'device-id', component: DeviceIdComponent,
        data: {
          breadcrumb: 'Device Id'
        },
      },
      {
        path: 'locator',
        component: LocatorComponent,
        data: {
          breadcrumb: 'Locator'
        },
      },
      {
        path: 'machining-capabilities',
        component: MachiningCapabilitiesComponent,
        data: {
          breadcrumb: 'Machining Capabilities'
        },
      },
      {
        path: 'installation',
        component: InstallationComponent,
        data: {
          breadcrumb: 'Installation'
        },
      },
      {
        path: 'measuring-capability',
        component: MeasuringCapabilityComponent,
        data: {
          breadcrumb: 'Measuring Capability'
        },
      },
      {
        path: 'machine-tool-element',
        data: {
          breadcrumb: 'Machine Tool Elements'
        },
        children: [
          {
            path: '',
            component: MachineToolElementComponent
          },
          {
            path: ':machineToolElementId/tailstock',
            component: TailstockComponent,
            data: {
              breadcrumb: 'Tailstock'
            },
          },
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
