import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {Pallet} from '../../../shared/models/pallet.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-pallet',
  templateUrl: './pallet.component.html',
  styleUrls: ['./pallet.component.sass']
})
export class PalletComponent implements OnInit {
  palletForm: FormArray;
  generator = Pallet.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.palletForm = this.machineToolSpecificationFormService.getPallets(this.machineToolElementId);
      });
  }

}
