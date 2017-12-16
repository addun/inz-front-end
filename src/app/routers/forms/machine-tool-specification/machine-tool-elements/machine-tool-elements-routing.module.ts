import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineToolElementsComponent} from './machine-tool-elements.component';
import {TailstockComponent} from './tailstock/tailstock.component';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {ColletComponent} from './collet/collet.component';

const routes: Routes = [
  {
    path: '',
    component: MachineToolElementsComponent,
    data: {
      breadcrumb: 'Machine Tool Elements'
    },
    children: [
      {
        path: ':machineToolElementId',
        children: [
          {
            path: 'tailstock',
            component: TailstockComponent,
            data: {
              breadcrumb: 'Tailstock'
            },
          },
          {
            path: 'bar-feeder',
            component: BarFeederComponent,
            data: {
              breadcrumb: 'Bar feeder'
            },
          },
          {
            path: 'collet',
            component: ColletComponent,
            data: {
              breadcrumb: 'Collet'
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
export class MachineToolElementsRoutingModule {
}
