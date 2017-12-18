import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachiningCapabilityProfile} from '../../types/machining-capability-profile.type';

@Component({
  selector: 'inz-machining-capability-form',
  templateUrl: './machining-capability-form.component.html',
  styleUrls: ['./machining-capability-form.component.sass']
})
export class MachiningCapabilityFormComponent implements OnInit {
  @Input() machiningCapabilityForm: FormGroup;
  machiningCapabilityProfile = MachiningCapabilityProfile;

  constructor() {
  }

  ngOnInit() {
  }

}
