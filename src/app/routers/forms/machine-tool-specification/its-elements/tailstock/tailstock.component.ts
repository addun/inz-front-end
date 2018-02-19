import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Tailstock} from '../../../shared/models/tailstock.model';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-tailstock',
  templateUrl: './tailstock.component.html',
  styleUrls: ['./tailstock.component.sass']
})
export class TailstockComponent implements OnInit {
  tailstockForm: FormArray;
  generator = Tailstock.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.tailstockForm = this.machineToolSpecificationFormService.getTailstocks(this.machineToolElementId);
      });
  }

}
