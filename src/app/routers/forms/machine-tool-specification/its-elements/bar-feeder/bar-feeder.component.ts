import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {BarFeeder} from '../../../shared/models/bar-feeder.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-bar-feeder',
  templateUrl: './bar-feeder.component.html',
  styleUrls: ['./bar-feeder.component.sass']
})
export class BarFeederComponent implements OnInit {
  formModelGroup: FormGroup;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): AbstractControl {
    return this.formModelGroup.controls['arrayModel'];
  }

  get model(): BarFeeder[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .bar_feeders;
  }

  set model(barFeeders: BarFeeder[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .bar_feeders = barFeeders;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = params['machineToolElementId'];
        this.formModelGroup = this.buildForm();
      });
  }

  buildForm(): FormGroup {
    return new FormGroup({
      arrayModel: new FormArray(this.loadForm())
    });
  }

  loadForm(): FormGroup[] {
    console.log(this.model);
    return this.model.map(model => {
      return new FormGroup(
        BarFeeder.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(BarFeeder.getFormControls()));
  }

  remove(index: number) {
    const control = <FormArray>this.modelForm;
    control.removeAt(index);
  }

  saveAll() {
    this.model = this.modelForm.value;
  }

}
