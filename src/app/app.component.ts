import {Component, OnInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'inz-root',
  template: '<inz-layout></inz-layout>',
  styleUrls: ['./shared/styles/main.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
  }
}
