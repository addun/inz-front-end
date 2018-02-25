import {Component, OnInit} from '@angular/core';
import {CoolantType} from '../../shared/types/coolant-type.type';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Coolant} from '../../shared/models/coolant.model';
import {MeansOfCoolantDelivery} from '../../shared/types/means-of-coolant-delivery.type';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-coolant',
  templateUrl: './coolant.component.html',
  styleUrls: ['./coolant.component.sass']
})
export class CoolantComponent implements OnInit {
  coolantForm: FormArray;
  generator = Coolant.getFormControls;
  coolantType = CoolantType;
  meansOfCoolantDelivery = MeansOfCoolantDelivery;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.coolantForm = this.machineToolSpecificationFormService.getCoolants(this.machineToolElementId);
      });
  }

}
