import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'inz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./shared/styles/main.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
