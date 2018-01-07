import {Component, OnInit} from '@angular/core';
import {LimitedSwing} from '../../../shared/models/limited-swing.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services/machine-tool-specification-form/machine-tool-specification-form.service';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'inz-limited-swing',
  templateUrl: './limited-swing.component.html',
  styleUrls: ['./limited-swing.component.sass']
})
export class LimitedSwingComponent implements OnInit {
  limitedSwingForm: FormArray;
  generator = LimitedSwing.getFormControls;
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
        this.limitedSwingForm = this.machineToolSpecificationFormService.getLimitedSwing(this.machineToolElementId);
      });
  }

}
