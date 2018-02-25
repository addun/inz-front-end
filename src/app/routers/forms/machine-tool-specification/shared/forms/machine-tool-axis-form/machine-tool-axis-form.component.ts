import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-machine-tool-axis-form',
  templateUrl: './machine-tool-axis-form.component.html',
  styleUrls: ['./machine-tool-axis-form.component.sass']
})
export class MachineToolAxisFormComponent implements OnInit {
  @Input() machineToolAxisForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
