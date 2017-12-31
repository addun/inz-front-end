import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LimitedSwing} from '../../../shared/models/limited-swing.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-limited-swing',
  templateUrl: './limited-swing.component.html',
  styleUrls: ['./limited-swing.component.sass']
})
export class LimitedSwingComponent implements OnInit {
  formGroups: FormGroup[];
  generator = LimitedSwing.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.limited_swing;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.limited_swing = model;
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
      return new FormGroup(LimitedSwing.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new LimitedSwing(form.value));
    });
  }

}
