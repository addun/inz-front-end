import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ToolSetting} from '../../../shared/models/tool-setting.model';
import {ProbeType} from '../../../shared/types/probe-type.type';

@Component({
  selector: 'inz-tool-setting',
  templateUrl: './tool-setting.component.html',
  styleUrls: ['./tool-setting.component.sass']
})
export class ToolSettingComponent implements OnInit {
  formModelGroup: FormGroup;
  probeType = ProbeType;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): AbstractControl {
    return this.formModelGroup.controls['arrayModel'];
  }

  get model(): ToolSetting[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tool_settings;
  }

  set model(toolSettings: ToolSetting[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tool_settings = toolSettings;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = params['machineToolElementId'];
        this.formModelGroup = this.buildForm();
      });
  }

  buildForm(): FormGroup {
    return new FormGroup({
      arrayModel: new FormArray(this.loadForm())
    });
  }

  loadForm(): FormGroup[] {
    return this.model.map(model => {
      return new FormGroup(
        ToolSetting.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(ToolSetting.getFormControls()));
  }

  remove(index: number) {
    const control = <FormArray>this.modelForm;
    control.removeAt(index);
  }

  saveAll() {
    this.model = this.modelForm.value;
  }

}
