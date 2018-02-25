import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-threaded-spindle-form',
  templateUrl: './threaded-spindle-form.component.html',
  styleUrls: ['./threaded-spindle-form.component.sass']
})
export class ThreadedSpindleFormComponent implements OnInit {
  @Input() threadedSpindleForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
