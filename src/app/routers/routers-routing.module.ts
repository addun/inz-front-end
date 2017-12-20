import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms/machine-tool-specification'
  },
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
      breadcrumb: 'Forms'
    },
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule {
}
