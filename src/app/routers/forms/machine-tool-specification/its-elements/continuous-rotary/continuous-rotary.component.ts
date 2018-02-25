import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ContinuousRotary} from '../../shared/models/continuous-rotary.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-continuous-rotary',
  templateUrl: './continuous-rotary.component.html',
  styleUrls: ['./continuous-rotary.component.sass']
})
export class ContinuousRotaryComponent implements OnInit {
  formGroups: FormArray;
  generator = ContinuousRotary.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.formGroups = this.machineToolSpecificationFormService.getContinuousRotaries(this.machineToolElementId);
      });
  }

}
