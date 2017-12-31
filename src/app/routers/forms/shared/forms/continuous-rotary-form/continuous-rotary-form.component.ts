import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-continuous-rotary-form',
  templateUrl: './continuous-rotary-form.component.html',
  styleUrls: ['./continuous-rotary-form.component.sass']
})
export class ContinuousRotaryFormComponent implements OnInit {
  @Input() continuousRotaryForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
