import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Injectable()
export class TreeToastService {

  constructor(private toastr: ToastsManager) {
  }

  directorySaved() {
    this.toastr.success('Directory has been created');
  }

  directoryRemoved() {
    this.toastr.success('Directory has been removed');
  }

  directoryRenamed() {
    this.toastr.success('Directory has been renamed');
  }


  fileSaved() {
    this.toastr.success('File has been created');
  }

  fileRemoved() {
    this.toastr.success('File has been removed');
  }

  fileRenamed() {
    this.toastr.success('File has been renamed');
  }

}
