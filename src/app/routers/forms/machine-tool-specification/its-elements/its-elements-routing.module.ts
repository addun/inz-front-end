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
import {ToolSettingComponent} from './tool-setting/tool-setting.component';
import {CoolantComponent} from './coolant/coolant.component';
import {MachineToolAxisComponent} from './machine-tool-axis/machine-tool-axis.component';
import {LinearAxisComponent} from './linear-axis/linear-axis.component';
import {ContinuousRotaryComponent} from './continuous-rotary/continuous-rotary.component';
import {IndexingComponent} from './indexing/indexing.component';
import {LimitedSwingComponent} from './limited-swing/limited-swing.component';
import {PalletComponent} from './pallet/pallet.component';
import {CircularWorkTableComponent} from './circular-work-table/circular-work-table.component';
import {RectangularWorkTableComponent} from './rectangular-work-table/rectangular-work-table.component';
import {TurretComponent} from './turret/turret.component';
import {ToolMagazineComponent} from './tool-magazine/tool-magazine.component';
import {ToolChangerComponent} from './tool-changer/tool-changer.component';

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
          {
            path: 'tool-settings',
            component: ToolSettingComponent,
            data: {
              breadcrumb: 'Tool settings'
            }
          },
          {
            path: 'collants',
            component: CoolantComponent,
            data: {
              breadcrumb: 'Coolants'
            }
          },
          {
            path: 'machine-tool-axis',
            component: MachineToolAxisComponent,
            data: {
              breadcrumb: 'Machine tool axis'
            }
          },
          {
            path: 'linear-axis',
            component: LinearAxisComponent,
            data: {
              breadcrumb: 'Linear axis'
            }
          },
          {
            path: 'continuous-rotary',
            component: ContinuousRotaryComponent,
            data: {
              breadcrumb: 'Continuous rotary'
            }
          },
          {
            path: 'indexing',
            component: IndexingComponent,
            data: {
              breadcrumb: 'Indexing'
            }
          },
          {
            path: 'limited-swing',
            component: LimitedSwingComponent,
            data: {
              breadcrumb: 'Limited swing'
            }
          },
          {
            path: 'rectangularWorkTables',
            component: PalletComponent,
            data: {
              breadcrumb: 'Pallet'
            }
          },
          {
            path: 'circular-work-table',
            component: CircularWorkTableComponent,
            data: {
              breadcrumb: 'Circular work table'
            }
          },
          {
            path: 'rectangular-work-table',
            component: RectangularWorkTableComponent,
            data: {
              breadcrumb: 'Rectangular work table'
            }
          },
          {
            path: 'turret',
            component: TurretComponent,
            data: {
              breadcrumb: 'Turret'
            }
          },
          {
            path: 'tool-magazine',
            component: ToolMagazineComponent,
            data: {
              breadcrumb: 'Tool magazine'
            }
          },
          {
            path: 'tool-changer',
            component: ToolChangerComponent,
            data: {
              breadcrumb: 'Tool changer'
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
