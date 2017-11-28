import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private serverUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {
  }

  get <T>(url: string, options?: Options): Observable<any> {
    return this.httpClient
      .get(`${this.serverUrl}${url}`, options);
  }

  post<T>(url: string, body: any, options?: Options): Observable<any> {
    return this.httpClient
      .post(`${this.serverUrl}${url}`, body, options);
  }

  put<T>(url: string, body: any, options?: Options): Observable<any> {
    return this.httpClient
      .put(`${this.serverUrl}${url}`, body, options);
  }

  delete<T>(url: string): Observable<any> {
    return this.httpClient
      .delete(`${this.serverUrl}${url}`);
  }

  patch<T>(url: string, body: any, options?: Options): Observable<any> {
    return this.httpClient
      .patch(`${this.serverUrl}${url}`, body, options);
  }

  options(url: string, options?: Options) {
    return this.httpClient.options(url, options);
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
