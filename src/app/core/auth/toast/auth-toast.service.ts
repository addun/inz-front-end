import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthToastService {

  constructor(private toastrService: ToastrService) {
  }


  loginFailed() {
    this.toastrService.error('Incorrect login or password');
  }

}
