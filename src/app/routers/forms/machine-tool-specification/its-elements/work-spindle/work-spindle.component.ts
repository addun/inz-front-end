import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WorkSpindle} from '../../../shared/models/work-spindle.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-work-spindle',
  templateUrl: './work-spindle.component.html',
  styleUrls: ['./work-spindle.component.sass']
})
export class WorkSpindleComponent implements OnInit {
  formGroups: FormGroup[];
  generator = WorkSpindle.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.work_spindle;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.work_spindle = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent.parent.params
      .subscribe(params => {
        this.activeArrayIndex = +params['machineToolElementId'];
        console.log(this.activeArrayIndex);
        this.formGroups = this.buildForms();
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(WorkSpindle.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new WorkSpindle(form.value));
    });
  }
}
