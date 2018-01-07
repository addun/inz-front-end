import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {StraightSpindle} from '../../../shared/models/straight-spindle.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-straight-spindle',
  templateUrl: './straight-spindle.component.html',
  styleUrls: ['./straight-spindle.component.sass']
})
export class StraightSpindleComponent implements OnInit {
  formGroups: FormGroup[];
  generator = StraightSpindle.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.straight_spindle;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.straight_spindle = model;
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
      return new FormGroup(StraightSpindle.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new StraightSpindle(form.value));
    });
  }
}
