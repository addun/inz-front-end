import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './tree/tree.module#TreeModule',
    redirectTo: 'forms/machine-tool-specification'
    // canActivate: [AuthGuardService],
    // canActivateChild: [AuthGuardService]
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
    data: {
      breadcrumb: 'Forms'
    },
    // canActivate: [AuthGuardService],
    // canActivateChild: [AuthGuardService]
  },
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule {
}
