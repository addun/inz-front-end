import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecification} from '../shared/models/machine-tool-specification.model';
import {MachineToolSpecificationService} from './shared/services/machine-tool-specification/machine-tool-specification.service';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass']
})
export class MachineToolSpecificationComponent implements OnInit {
  machineToolSpecification: MachineToolSpecification;
  machineToolSpecificationForm: FormGroup;

  schema;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.machineToolSpecificationForm = this.buildForm();
    this.machineToolSpecification = this.machineToolSpecificationService.machine_tool_specification;
  }

  save() {
    const values = this.machineToolSpecificationForm.value;

    this.machineToolSpecificationService
      .machine_tool_specification = Object.assign(
      this.machineToolSpecificationService.machine_tool_specification, values
    );

    this.schema = this.machineToolSpecificationService.machine_tool_specification;

  }
  private buildForm() {
    return this.machineToolSpecificationForm = new FormGroup(
      MachineToolSpecification.getFormControls(
        this.machineToolSpecificationService.machine_tool_specification
      )
    );
  }


}
