import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-tapered-spindle-form',
  templateUrl: './tapered-spindle-form.component.html',
  styleUrls: ['./tapered-spindle-form.component.sass']
})
export class TaperedSpindleFormComponent implements OnInit {
  @Input() taperedSpindleForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
