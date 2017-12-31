import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LinearAxis} from '../../../shared/models/linear-axis.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-linear-axis',
  templateUrl: './linear-axis.component.html',
  styleUrls: ['./linear-axis.component.sass']
})
export class LinearAxisComponent implements OnInit {
  formGroups: FormGroup[];
  generator = LinearAxis.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.linear_axis;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.linear_axis = model;
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
      return new FormGroup(LinearAxis.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new LinearAxis(form.value));
    });
  }

}
