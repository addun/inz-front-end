import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Injectable()
export class AuthToastService {

  constructor(private toastsManager: ToastsManager) {
  }


  loginFailed() {
    this.toastsManager.error('Incorrect login or password');
  }

}
