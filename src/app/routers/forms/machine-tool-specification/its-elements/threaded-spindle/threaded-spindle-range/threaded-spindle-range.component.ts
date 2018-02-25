import {Component, OnInit} from '@angular/core';
import {SpindleRange} from '../../../shared/models/spindle-range.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../../shared/services';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'inz-threaded-spindle-range',
  templateUrl: './threaded-spindle-range.component.html',
  styleUrls: ['./threaded-spindle-range.component.sass']
})
export class ThreadedSpindleRangeComponent implements OnInit {
  threadedSpindleRangeForm: FormArray;
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
        this.threadedSpindleRangeForm = this.machineToolSpecificationFormService.getThreadedSpindleRange(this.machineToolElementId, this.spindleId);
      });

    });
  }
}
