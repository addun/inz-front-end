import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'inz-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  goToStartPage() {
    this.router.navigate(['/']);
  }
}
