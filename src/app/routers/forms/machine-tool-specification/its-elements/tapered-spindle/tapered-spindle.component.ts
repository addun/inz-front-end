import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {TaperedSpindle} from '../../../shared/models/tapered-spindle.model';

@Component({
  selector: 'inz-tapered-spindle',
  templateUrl: './tapered-spindle.component.html',
  styleUrls: ['./tapered-spindle.component.sass']
})
export class TaperedSpindleComponent implements OnInit {
  formGroups: FormGroup[];
  generator = TaperedSpindle.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.tapered_spindle;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.tapered_spindle = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent.parent.params
      .subscribe(params => {
        this.activeArrayIndex = +params['machineToolElementId'];
        this.formGroups = this.buildForms();
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(TaperedSpindle.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new TaperedSpindle(form.value));
    });
  }
}
