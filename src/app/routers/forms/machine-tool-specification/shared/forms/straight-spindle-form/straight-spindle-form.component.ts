import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-straight-spindle-form',
  templateUrl: './straight-spindle-form.component.html',
  styleUrls: ['./straight-spindle-form.component.sass']
})
export class StraightSpindleFormComponent implements OnInit {
  @Input() straightSpindleForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
