import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ToolSetting} from '../../shared/models/tool-setting.model';
import {ProbeType} from '../../shared/types/probe-type.type';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-tool-setting',
  templateUrl: './tool-setting.component.html',
  styleUrls: ['./tool-setting.component.sass']
})
export class ToolSettingComponent implements OnInit {
  toolSetting: FormArray;
  generator = ToolSetting.getFormControls;
  probeType = ProbeType;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.toolSetting = this.machineToolSpecificationFormService.getToolSettings(this.machineToolElementId);
      });
  }

}
