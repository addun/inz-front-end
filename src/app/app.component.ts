import {Component, OnInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'inz-root',
  template: '<inz-layout></inz-layout>',
  styleUrls: ['./shared/styles/main.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,
              private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
