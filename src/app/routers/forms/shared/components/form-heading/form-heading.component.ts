import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'inz-form-heading',
  templateUrl: './form-heading.component.html',
  styleUrls: ['./form-heading.component.sass']
})
export class FormHeadingComponent implements OnInit {
  @Input() heading: string;
  constructor() { }

  ngOnInit() {
  }

}
