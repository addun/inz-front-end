import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-limited-swing-form',
  templateUrl: './limited-swing-form.component.html',
  styleUrls: ['./limited-swing-form.component.sass']
})
export class LimitedSwingFormComponent implements OnInit {
  @Input() limitedSwingForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
