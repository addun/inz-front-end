import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/auth/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tree/tree.module#TreeModule',
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule {
}
