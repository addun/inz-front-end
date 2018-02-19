import {Component, OnInit} from '@angular/core';
import {ToolAssembly} from '../../../../shared/models/tool-assembly.model';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../../shared/services';

@Component({
  selector: 'inz-turret-contents',
  templateUrl: './turret-contents.component.html',
  styleUrls: ['./turret-contents.component.sass']
})
export class TurretContentsComponent implements OnInit {
  turretAssemblyForm: FormArray;
  generator = ToolAssembly.getFormControls;
  private machineToolElementId: number;
  private turretId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params.subscribe(params => {

      this.machineToolElementId = +params['machineToolElementId'];

      this.activatedRoute
        .params.subscribe(pppparams => {
        this.turretId = pppparams['turretId'];
        this.turretAssemblyForm = this.machineToolSpecificationFormService.getTurretContents(this.machineToolElementId, this.turretId);
      });

    });
  }

}
