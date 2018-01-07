import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SpindleRange} from '../../../../shared/models/spindle-range.model';
import {MachineToolSpecificationService} from '../../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-straight-spindle-range',
  templateUrl: './straight-spindle-range.component.html',
  styleUrls: ['./straight-spindle-range.component.sass']
})
export class StraightSpindleRangeComponent implements OnInit {
  formGroups: FormGroup[];
  generator = SpindleRange.getFormControls;
  private activeArrayIndex: number;
  private spindleIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.straight_spindle[this.spindleIndex].range;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.straight_spindle[this.spindleIndex].range = model;
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
