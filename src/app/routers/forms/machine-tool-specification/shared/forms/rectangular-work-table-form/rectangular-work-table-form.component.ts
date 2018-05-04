import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-rectangular-work-table-form',
  templateUrl: './rectangular-work-table-form.component.html',
  styleUrls: ['./rectangular-work-table-form.component.sass']
})
export class RectangularWorkTableFormComponent implements OnInit {
  @Input() rectangularWorkTable: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
