import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ContinuousRotary} from '../../../shared/models/continuous-rotary.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-continuous-rotary',
  templateUrl: './continuous-rotary.component.html',
  styleUrls: ['./continuous-rotary.component.sass']
})
export class ContinuousRotaryComponent implements OnInit {
  formGroups: FormGroup[];
  generator = ContinuousRotary.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.continuous_rotary;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.continuous_rotary = model;
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
      return new FormGroup(ContinuousRotary.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new ContinuousRotary(form.value));
    });
  }

}
