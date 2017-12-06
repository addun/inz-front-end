import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './tree/tree.module#TreeModule'},
  {path: 'forms', loadChildren: './forms/forms.module#FormsModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule {
}
