import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineToolElementsComponent} from './machine-tool-elements.component';
import {TailstockComponent} from './tailstock/tailstock.component';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {ColletComponent} from './collet/collet.component';
import {RouterOutletComponent} from './shared/components/router-outlet/router-outlet.component';

const routes: Routes = [
  {
    path: '',
    component: RouterOutletComponent,
    children: [
      {
        path: '',
        component: MachineToolElementsComponent,
      },
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
          {
            path: 'tailstock',
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
export class MachineToolElementsRoutingModule {
}
