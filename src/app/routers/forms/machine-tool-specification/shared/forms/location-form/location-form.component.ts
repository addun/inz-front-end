import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.sass']
})
export class LocationFormComponent implements OnInit {
  @Input() locationForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
