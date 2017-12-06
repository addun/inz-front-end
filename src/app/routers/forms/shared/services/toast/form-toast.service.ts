import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Injectable()
export class FormToastService {

  constructor(private toastr: ToastsManager) {
  }

  addedSuccess() {
    this.toastr.success('Added');
  }

}
