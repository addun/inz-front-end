import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-spindle-form',
  templateUrl: './spindle-form.component.html',
  styleUrls: ['./spindle-form.component.sass']
})
export class SpindleFormComponent implements OnInit {
  @Input() spindleForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
