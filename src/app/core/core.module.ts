import {AuthToastService} from './auth/toast/auth-toast.service';
import {AuthService} from './auth/service/auth.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './api/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'ng2-toastr';
import {AuthGuardService} from './auth/guard/auth-guard.service';
import {BrowserModule} from '@angular/platform-browser';
import {ApiToastService} from './toast/api-toast.service';
import {AuthInterceptor} from './auth/interceptor/auth.interceptor';
import {StorageService} from './storage/storage.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ToastModule.forRoot()
  ],
  providers: [
    ApiService,
    AuthService,
    AuthToastService,
    AuthGuardService,
    StorageService,
    ApiToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: [],
})
export class CoreModule {
}
