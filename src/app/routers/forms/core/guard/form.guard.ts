import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MachineToolSpecificationFormService} from '../../machine-tool-specification/shared/services';

@Injectable()
export class FormGuard implements CanActivate, CanActivateChild {

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkServiceData();
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkServiceData();
  }

  checkServiceData(): boolean {
    if (this.machineToolSpecificationFormService.machineToolSpecificationId) {
      return true;
    } else {
      this.router.navigate(['/tree']);
      return false;
    }
  }

}
