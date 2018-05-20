import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationHeaderValue = this.authService.getAuthorizationHeaderValue();
    const authorizationHeaderKey = this.authService.getAuthorizationHeaderKey();
    const updatedRequest = request.clone({
        headers: request.headers.set(authorizationHeaderKey, authorizationHeaderValue)
      }
    );
    return next.handle(updatedRequest);
  }
}
