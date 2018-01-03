import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ToolChanger} from '../../../shared/models/tool-changer.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-tool-changer',
  templateUrl: './tool-changer.component.html',
  styleUrls: ['./tool-changer.component.sass']
})
export class ToolChangerComponent implements OnInit {
  formGroups: FormGroup[];
  generator = ToolChanger.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.tool_changer;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.tool_changer = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = +params['machineToolElementId'];
        this.formGroups = this.buildForms();
        console.log(this.formGroups);
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(ToolChanger.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new ToolChanger(form.value));
    });
  }

}
