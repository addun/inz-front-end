import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';
import {DeviceIdComponent} from './machine-tool-specification/device-id/device-id.component';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';
import {MachiningCapabilitiesComponent} from './machine-tool-specification/machining-capabilities/machining-capabilities.component';

const routes: Routes = [
  {
    path: 'machine-tool-specification',
    component: FormsComponent,
    data: {
      breadcrumb: 'Machine Tool Specification'
    },
    children: [
      {
        path: '',
        component: MachineToolSpecificationComponent
      },
      {
        path: 'device-id',
        component: DeviceIdComponent,
        data: {
          breadcrumb: 'Device Id'
        },
      },
      {
        path: 'machining-capabilities',
        component: MachiningCapabilitiesComponent,
        data: {
          breadcrumb: 'Machining Capabilities'
        },
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
