import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-measuring-capability-form',
  templateUrl: './measuring-capability-form.component.html',
  styleUrls: ['./measuring-capability-form.component.sass']
})
export class MeasuringCapabilityFormComponent implements OnInit {
  @Input() measuringCapabilityForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
