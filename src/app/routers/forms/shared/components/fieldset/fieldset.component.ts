import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'inz-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.sass']
})
export class FieldsetComponent implements OnInit {
  @Input() legend: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
