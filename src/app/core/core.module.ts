import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './api/api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  declarations: []
})
export class CoreModule {
}
