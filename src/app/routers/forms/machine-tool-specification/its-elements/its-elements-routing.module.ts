import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {RouterOutletComponent} from '../../shared/components/router-outlet/router-outlet.component';
import {ItsElementsComponent} from './its-elements.component';
import {TailstockComponent} from './tailstock/tailstock.component';
import {ColletComponent} from './collet/collet.component';
import {ChuckComponent} from './chuck/chuck.component';
import {ToolBreakageComponent} from './tool-breakage/tool-breakage.component';
import {PartProbeComponent} from './part-probe/part-probe.component';

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
              breadcrumb: 'Bar Feeders'
            }
          },
          {
            path: 'tailstocks',
            component: TailstockComponent,
            data: {
              breadcrumb: 'Tailstocks'
            }
          },
          {
            path: 'collets',
            component: ColletComponent,
            data: {
              breadcrumb: 'Collets'
            }
          },
          {
            path: 'chucks',
            component: ChuckComponent,
            data: {
              breadcrumb: 'Chucks'
            }
          },
          {
            path: 'tool-breakages',
            component: ToolBreakageComponent,
            data: {
              breadcrumb: 'Tool breakages'
            }
          },
          {
            path: 'part-probes',
            component: PartProbeComponent,
            data: {
              breadcrumb: 'Part probes'
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
