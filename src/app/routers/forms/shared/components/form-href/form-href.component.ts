import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'inz-form-href',
  templateUrl: './form-href.component.html',
  styleUrls: ['./form-href.component.sass']
})
export class FormHrefComponent implements OnInit {
  @Input() href: string;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
