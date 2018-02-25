import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {StraightSpindle} from '../../shared/models/straight-spindle.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-straight-spindle',
  templateUrl: './straight-spindle.component.html',
  styleUrls: ['./straight-spindle.component.sass']
})
export class StraightSpindleComponent implements OnInit {
  formGroups: FormArray;
  generator = StraightSpindle.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.machineToolElementId = +params['machineToolElementId'];
      this.formGroups = this.machineToolSpecificationFormService.getStraightSpindles(this.machineToolElementId);
    });
  }
}
