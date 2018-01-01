import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FixtureStyle} from '../../types/fixture-type.type';

@Component({
  selector: 'inz-work-table-form',
  templateUrl: './work-table-form.component.html',
  styleUrls: ['./work-table-form.component.sass']
})
export class WorkTableFormComponent implements OnInit {
  @Input() workTableForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  fixtureStyle = FixtureStyle;

  constructor() {
  }

  ngOnInit() {
  }

}
