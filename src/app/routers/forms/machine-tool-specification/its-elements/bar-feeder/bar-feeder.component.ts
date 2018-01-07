import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {BarFeeder} from '../../../shared/models/bar-feeder.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-bar-feeder',
  templateUrl: './bar-feeder.component.html',
  styleUrls: ['./bar-feeder.component.sass']
})
export class BarFeederComponent implements OnInit {
  BarFeederForm: FormArray;
  generator = BarFeeder.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.BarFeederForm = this.machineToolSpecificationFormService.getBarFeeder(this.machineToolElementId);
      });
  }
}
