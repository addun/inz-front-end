import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineClass} from '../shared/types/machine-class.type';
import {MachineToolSpecification} from '../shared/models/machine-tool-specification.model';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass']
})
export class MachineToolSpecificationComponent implements OnInit {
  formGroup: FormGroup;
  machineClass = MachineClass;

  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = new FormGroup(MachineToolSpecification.getFormControls());
  }


}
