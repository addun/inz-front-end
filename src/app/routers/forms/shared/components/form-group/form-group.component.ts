import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.sass']
})
export class FormGroupComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
