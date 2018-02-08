import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Injectable()
export class ApiToastService {

  constructor(private toastr: ToastsManager) {
  }

  success(msg: string, title: string) {
    this.toastr.success(msg, title);
  }

  error(msg: string, title: string) {
    this.toastr.error(msg, title);
  }

}
