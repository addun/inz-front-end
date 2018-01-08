import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }


  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  checkLogin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.authService.isLogged) {
        resolve(true);
      } else {
        resolve(false);
        this.router.navigate(['/auth']);
      }
    });
  }
}
