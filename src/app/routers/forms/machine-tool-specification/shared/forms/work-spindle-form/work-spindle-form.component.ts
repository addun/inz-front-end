import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-work-spindle-form',
  templateUrl: './work-spindle-form.component.html',
  styleUrls: ['./work-spindle-form.component.sass']
})
export class WorkSpindleFormComponent implements OnInit {
  @Input() workSpindleForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
