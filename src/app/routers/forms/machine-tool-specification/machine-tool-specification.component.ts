import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationFormService} from './shared/services';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass'],
})
export class MachineToolSpecificationComponent implements OnInit {
  machineToolSpecificationForm: FormGroup;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService) {
  }

  ngOnInit() {
    this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
  }

}
