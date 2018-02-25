import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Spindle} from '../../shared/models/spindle.model';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-spindle',
  templateUrl: './spindle.component.html',
  styleUrls: ['./spindle.component.sass']
})
export class SpindleComponent implements OnInit {
  spindleForm: FormArray;
  generator = Spindle.getFormControls;
  private machineToolElementId: number;


  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.machineToolElementId = +params['machineToolElementId'];
      this.spindleForm = this.machineToolSpecificationFormService.getSpindles(this.machineToolElementId);
    });
  }
}
