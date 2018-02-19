import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {MachineToolAxis} from '../../../shared/models/machine-tool-axis.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-machine-tool-axis',
  templateUrl: './machine-tool-axis.component.html',
  styleUrls: ['./machine-tool-axis.component.sass']
})
export class MachineToolAxisComponent implements OnInit {
  machineToolAxisForm: FormArray;
  generator = MachineToolAxis.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.machineToolAxisForm = this.machineToolSpecificationFormService.getMachineToolAxes(this.machineToolElementId);
      });
  }
}
