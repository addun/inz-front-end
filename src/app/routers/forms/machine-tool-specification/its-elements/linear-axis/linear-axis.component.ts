import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {LinearAxis} from '../../../shared/models/linear-axis.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-linear-axis',
  templateUrl: './linear-axis.component.html',
  styleUrls: ['./linear-axis.component.sass']
})
export class LinearAxisComponent implements OnInit {
  linearAxisForm: FormArray;
  generator = LinearAxis.getFormControls;
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
        this.linearAxisForm = this.machineToolSpecificationFormService.getLinearAxes(this.machineToolElementId);
      });
  }

}
