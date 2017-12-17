import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms.component';
import {DeviceIdComponent} from './machine-tool-specification/device-id/device-id.component';
import {MachineToolSpecificationComponent} from './machine-tool-specification/machine-tool-specification.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
