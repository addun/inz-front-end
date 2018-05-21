import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.isLogin()
        .then(value => {
          if (value) {
            resolve(true);
          } else {
            this.router.navigate(['/auth']);
            resolve(false);
          }
        });
    });
  }
}
