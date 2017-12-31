import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-linear-axis-form',
  templateUrl: './linear-axis-form.component.html',
  styleUrls: ['./linear-axis-form.component.sass']
})
export class LinearAxisFormComponent implements OnInit {
  @Input() linearAxisForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
