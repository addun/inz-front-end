import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {SpindleRange} from '../../../../shared/models/spindle-range.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../../shared/services';

@Component({
  selector: 'inz-spindle-range',
  templateUrl: './spindle-range.component.html',
  styleUrls: ['./spindle-range.component.sass']
})
export class SpindleRangeComponent implements OnInit {
  spindleRangeForm: FormArray;
  generator = SpindleRange.getFormControls;
  private machineToolElementId: number;
  private spindleId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.machineToolElementId = +params['machineToolElementId'];

      this.activatedRoute.params.subscribe(pppparams => {
        this.spindleId = +pppparams['spindleId'];
        this.spindleRangeForm = this.machineToolSpecificationFormService.getSpindleRange(this.machineToolElementId, this.spindleId);
      });

    });
  }
}
