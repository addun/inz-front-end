import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {StandardMachiningProcess} from '../../shared/models/standard-machining-process.model';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-standard-machining-process',
  templateUrl: './standard-machining-process.component.html',
  styleUrls: ['./standard-machining-process.component.sass']
})
export class StandardMachiningProcessComponent implements OnInit {
  formGroups: FormGroup[];
  generator = StandardMachiningProcess.getFormControls;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get model() {
    return this.machineToolSpecificationService.machine_tool_specification.environmental_evaluation.power_for_standard_machining;
  }

  set model(model) {
    this.machineToolSpecificationService.machine_tool_specification.environmental_evaluation.power_for_standard_machining = model;
  }

  ngOnInit(): void {
    this.formGroups = this.buildForms();
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(StandardMachiningProcess.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new StandardMachiningProcess(form.value));
    });
  }

}
