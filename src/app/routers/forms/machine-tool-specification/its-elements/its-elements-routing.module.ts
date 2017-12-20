import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {RouterOutletComponent} from '../../shared/components/router-outlet/router-outlet.component';
import {ItsElementsComponent} from './its-elements.component';
import {TailstockComponent} from './tailstock/tailstock.component';
import {ColletComponent} from './collet/collet.component';

const routes: Routes = [
  {
    path: '',
    component: RouterOutletComponent,
    children: [
      {
        path: '',
        component: ItsElementsComponent
      },
      {
        path: ':machineToolElementId',
        component: RouterOutletComponent,
        children: [
          {
            path: 'bar-feeders',
            component: BarFeederComponent,
            data: {
              breadcrumb: 'Bar Feeder'
            }
          },
          {
            path: 'tailstocks',
            component: TailstockComponent,
            data: {
              breadcrumb: 'Tailstock'
            }
          },
          {
            path: 'collets',
            component: ColletComponent,
            data: {
              breadcrumb: 'Collet'
            }
          },
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItsElementsRoutingModule {
}
