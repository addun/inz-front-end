import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {SharedModule} from '../shared/shared.module';
import {NavbarComponent} from './navbar/navbar.component';
import {ContentComponent} from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent,
    ContentComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
