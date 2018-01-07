import {Component, OnInit} from '@angular/core';
import {ThreadedSpindle} from '../../../shared/models/threaded-spindle.model';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-threaded-spindle',
  templateUrl: './threaded-spindle.component.html',
  styleUrls: ['./threaded-spindle.component.sass']
})
export class ThreadedSpindleComponent implements OnInit {
  formGroups: FormGroup[];
  generator = ThreadedSpindle.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.threaded_spindle;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.threaded_spindle = model;
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
      return new FormGroup(ThreadedSpindle.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new ThreadedSpindle(form.value));
    });
  }
}
