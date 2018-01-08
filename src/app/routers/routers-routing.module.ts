import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'tree',
    loadChildren: './tree/tree.module#TreeModule',
    data: {
      breadcrumb: 'Tree'
    }
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
    data: {
      breadcrumb: ' '
    },
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    redirectTo: '/tree'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule {
}
