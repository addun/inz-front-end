import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';
import {Spindle} from '../../../shared/models/spindle.model';

@Component({
  selector: 'inz-spindle',
  templateUrl: './spindle.component.html',
  styleUrls: ['./spindle.component.sass']
})
export class SpindleComponent implements OnInit {
  formGroups: FormGroup[];
  generator = Spindle.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.spindle;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.spindle = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent.parent.params
      .subscribe(params => {
        console.log('tsetset');
        this.activeArrayIndex = +params['machineToolElementId'];
        console.log(this.activeArrayIndex);
        this.formGroups = this.buildForms();
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(Spindle.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new Spindle(form.value));
    });
  }
}
