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
  barFeederForm: FormGroup;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get bar_feeder(): AbstractControl {
    return this.barFeederForm.controls['bar_feeders'];
  }

  get barFeeders(): BarFeeder[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .bar_feeders;
  }

  set barFeeders(barFeeders: BarFeeder[]) {
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
        this.barFeederForm = this.buildBarFeederForm();
      });
  }

  buildBarFeederForm(): FormGroup {
    return new FormGroup({
      bar_feeders: new FormArray(this.loadBarFeederForm())
    });
  }

  loadBarFeederForm(): FormGroup[] {
    return this.barFeeders.map(model => {
      return new FormGroup(
        BarFeeder.getFormControls(model)
      );
    });
  }

  addBarFeeder() {
    const control = <FormArray>this.bar_feeder;
    control.push(new FormGroup(BarFeeder.getFormControls()));
  }

  removeBarFeeder(index: number) {
    const control = <FormArray>this.bar_feeder;
    control.removeAt(index);
  }

  saveAll() {
    this.barFeeders = this.bar_feeder.value;
  }

}
