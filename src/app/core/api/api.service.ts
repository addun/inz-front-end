import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiToastService} from '../toast/api-toast.service';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {
  private serverUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient,
              private apiToastService: ApiToastService) {
  }

  get<T>(url: string, options?: Options): Observable<any> {
    return this.httpClient
      .get(`${this.serverUrl}${url}`, options)
      .pipe(
        catchError(error => {
          this.error();
          return error;
        })
      );
  }

  post<T>(url: string, body: any, options?: Options): Observable<any> {
    return this.httpClient
      .post(`${this.serverUrl}${url}`, body, options)
      .pipe(
        map(element => {
          this.success();
          return element;
        }),
        catchError(error => {
          this.error();
          return error;
        })
      );
  }

  put<T>(url: string, body: any, options?: Options): Observable<any> {
    return this.httpClient
      .put(`${this.serverUrl}${url}`, body, options)
      .pipe(
        map(element => {
          this.success();
          return element;
        }),
        catchError(error => {
          this.error();
          return error;
        })
      );
  }

  delete<T>(url: string): Observable<any> {
    return this.httpClient
      .delete(`${this.serverUrl}${url}`)
      .pipe(
        map(element => {
          this.success();
          return element;
        }),
        catchError(error => {
          this.error();
          return error;
        })
      );
  }

  patch<T>(url: string, body: any, options?: Options): Observable<any> {
    return this.httpClient
      .patch(`${this.serverUrl}${url}`, body, options)
      .pipe(
        map(element => {
          this.success();
          return element;
        }),
        catchError(error => {
          this.error();
          return error;
        })
      );
  }

  options(url: string, options?: Options) {
    return this.httpClient.options(url, options)
      .pipe(
        map(element => {
          this.success();
          return element;
        }),
        catchError(error => {
          this.error();
          return error;
        })
      );
  }

  success() {
    this.apiToastService.saved();
  }

  error() {
    this.apiToastService.error();
  }

}


class Options {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
