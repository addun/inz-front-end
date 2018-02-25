import {Component, OnInit} from '@angular/core';
import {Turret} from '../../shared/models/turret.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'inz-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.sass']
})
export class TurretComponent implements OnInit {
  turretForm: FormArray;
  generator = Turret.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute

      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.turretForm = this.machineToolSpecificationFormService.getTurrets(this.machineToolElementId);
      });
  }

}
