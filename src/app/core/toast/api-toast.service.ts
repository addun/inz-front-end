import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Injectable()
export class ApiToastService {

  constructor(private toastr: ToastsManager) {
  }

  saved() {
    this.toastr.success('The operation was successful!');
  }

  error() {
    this.toastr.error('Error while saved data!');
  }

}
