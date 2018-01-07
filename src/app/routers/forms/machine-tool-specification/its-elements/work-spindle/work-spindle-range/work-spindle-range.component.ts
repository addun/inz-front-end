import { Component, OnInit } from '@angular/core';
import {SpindleRange} from '../../../../shared/models/spindle-range.model';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-work-spindle-range',
  templateUrl: './work-spindle-range.component.html',
  styleUrls: ['./work-spindle-range.component.sass']
})
export class WorkSpindleRangeComponent implements OnInit {
  formGroups: FormGroup[];
  generator = SpindleRange.getFormControls;
  private activeArrayIndex: number;
  private spindleIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.work_spindle[this.spindleIndex].range;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.work_spindle[this.spindleIndex].range = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent.parent.parent
      .params.subscribe(params => {
      this.activeArrayIndex = +params['machineToolElementId'];

      this.activatedRoute
        .parent.paramMap.subscribe(paramMap => {
        this.spindleIndex = +paramMap.get('spindleId');
        this.formGroups = this.buildForms();
      });
    });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(SpindleRange.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new SpindleRange(form.value));
    });
  }
}
