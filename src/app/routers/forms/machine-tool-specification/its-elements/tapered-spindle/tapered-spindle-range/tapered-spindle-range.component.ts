import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {SpindleRange} from '../../../../shared/models/spindle-range.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../../shared/services';

@Component({
  selector: 'inz-tapered-spindle-range',
  templateUrl: './tapered-spindle-range.component.html',
  styleUrls: ['./tapered-spindle-range.component.sass']
})
export class TaperedSpindleRangeComponent implements OnInit {
  taperedSpindleRangeForm: FormArray;
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
        this.taperedSpindleRangeForm = this.machineToolSpecificationFormService.getTaperedSpindleRange(this.machineToolElementId, this.spindleId);
      });

    });
  }
}
