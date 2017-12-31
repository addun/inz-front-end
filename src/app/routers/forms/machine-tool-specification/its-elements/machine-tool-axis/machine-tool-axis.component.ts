import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolAxis} from '../../../shared/models/machine-tool-axis.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-machine-tool-axis',
  templateUrl: './machine-tool-axis.component.html',
  styleUrls: ['./machine-tool-axis.component.sass']
})
export class MachineToolAxisComponent implements OnInit {
  formGroups: FormGroup[];
  generator = MachineToolAxis.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.machine_tool_axes;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.machine_tool_axes = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = +params['machineToolElementId'];
        this.formGroups = this.buildForms();
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(MachineToolAxis.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new MachineToolAxis(form.value));
    });
  }
}
