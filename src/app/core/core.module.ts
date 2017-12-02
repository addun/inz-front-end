import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './api/api.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'ng2-toastr';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ToastModule.forRoot()
  ],
  providers: [
    ApiService
  ],
  declarations: []
})
export class CoreModule {
}
