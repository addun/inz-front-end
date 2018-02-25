import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-rotary-axis-form',
  templateUrl: './rotary-axis-form.component.html',
  styleUrls: ['./rotary-axis-form.component.sass']
})
export class RotaryAxisFormComponent implements OnInit {
  @Input() rotaryAxisForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
