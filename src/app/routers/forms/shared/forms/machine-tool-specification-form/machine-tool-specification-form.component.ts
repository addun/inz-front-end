import {Component, Input, OnInit} from '@angular/core';
import {MachineClass} from '../../types/machine-class.type';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-machine-tool-specification-form',
  templateUrl: './machine-tool-specification-form.component.html',
  styleUrls: ['./machine-tool-specification-form.component.sass']
})
export class MachineToolSpecificationFormComponent implements OnInit {
  machineClass = MachineClass;

  constructor() {
  }

  ngOnInit() {
  }

}
