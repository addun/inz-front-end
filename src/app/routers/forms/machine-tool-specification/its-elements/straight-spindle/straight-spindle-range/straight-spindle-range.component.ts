import {Component, OnInit} from '@angular/core';
import {SpindleRange} from '../../../../shared/models/spindle-range.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../../shared/services';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'inz-straight-spindle-range',
  templateUrl: './straight-spindle-range.component.html',
  styleUrls: ['./straight-spindle-range.component.sass']
})
export class StraightSpindleRangeComponent implements OnInit {
  straightSpindleRangeForm: FormArray;
  generator = SpindleRange.getFormControls;
  private machineToolElementId: number;
  private spindleId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.parent.parent.params.subscribe(params => {

      this.machineToolElementId = +params['machineToolElementId'];

      this.activatedRoute.parent.params.subscribe(pppparams => {
        this.spindleId = +pppparams['spindleId'];
        this.straightSpindleRangeForm = this.machineToolSpecificationFormService.getStraightSpindleRange(this.machineToolElementId, this.spindleId);
      });

    });
  }
}
