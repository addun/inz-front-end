import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-circular-work-table-form',
  templateUrl: './circular-work-table-form.component.html',
  styleUrls: ['./circular-work-table-form.component.sass']
})
export class CircularWorkTableFormComponent implements OnInit {
  @Input() circularWorkTable: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
