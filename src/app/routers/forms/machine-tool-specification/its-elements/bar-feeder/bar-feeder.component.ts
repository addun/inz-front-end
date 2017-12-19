import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormArray, FormGroup} from '@angular/forms';
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

  get bar_feeder(): any {
    return this.barFeederForm.controls['bar_feeder'];
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
      bar_feeder: new FormArray(this.loadBarFeederForm())
    });
  }

  loadBarFeederForm(): FormGroup[] {
    let capabilities = this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities;

    if (!capabilities) {
      capabilities = {
        bar_feeder: []
      };
    } else {
      if (!capabilities.bar_feeder) {
        capabilities.bar_feeder = [];
      }
    }

    this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities = capabilities;

    return capabilities.bar_feeder.map(model => {
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
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.bar_feeder = this.bar_feeder.value;
  }

}
