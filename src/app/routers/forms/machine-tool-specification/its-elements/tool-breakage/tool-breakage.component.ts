import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ToolBreakage} from '../../../shared/models/tool-breakage.model';

@Component({
  selector: 'inz-tool-breakage',
  templateUrl: './tool-breakage.component.html',
  styleUrls: ['./tool-breakage.component.sass']
})
export class ToolBreakageComponent implements OnInit {
  formModelGroup: FormGroup;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): AbstractControl {
    return this.formModelGroup.controls['arrayModel'];
  }

  get model(): ToolBreakage[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tool_breakages;
  }

  set model(toolBreakages: ToolBreakage[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tool_breakages = toolBreakages;
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
        ToolBreakage.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(ToolBreakage.getFormControls()));
  }

  remove(index: number) {
    const control = <FormArray>this.modelForm;
    control.removeAt(index);
  }

  saveAll() {
    this.model = this.modelForm.value;
  }

}
