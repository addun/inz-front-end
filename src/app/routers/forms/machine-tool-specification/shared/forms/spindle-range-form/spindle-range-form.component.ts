import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-spindle-range-form',
  templateUrl: './spindle-range-form.component.html',
  styleUrls: ['./spindle-range-form.component.sass']
})
export class SpindleRangeFormComponent implements OnInit {
  @Input() spindleRangerForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
