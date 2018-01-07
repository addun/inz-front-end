import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TaperedSpindle} from '../../../shared/models/tapered-spindle.model';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-tapered-spindle',
  templateUrl: './tapered-spindle.component.html',
  styleUrls: ['./tapered-spindle.component.sass']
})
export class TaperedSpindleComponent implements OnInit {
  formGroups: FormArray;
  generator = TaperedSpindle.getFormControls;
  private machineToolElementId: number;


  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.parent.params.subscribe(params => {
      this.machineToolElementId = +params['machineToolElementId'];
      this.formGroups = this.machineToolSpecificationFormService.getTaperedSpindles(this.machineToolElementId);
    });
  }
}
