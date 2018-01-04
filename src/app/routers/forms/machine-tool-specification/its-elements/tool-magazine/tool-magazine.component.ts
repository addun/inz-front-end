import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ToolMagazine} from '../../../shared/models/tool-magazine.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-tool-magazine',
  templateUrl: './tool-magazine.component.html',
  styleUrls: ['./tool-magazine.component.sass']
})
export class ToolMagazineComponent implements OnInit {
  formGroups: FormGroup[];
  generator = ToolMagazine.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.tool_magazine;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.tool_magazine = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent.parent
      .paramMap
      .subscribe(params => {
        this.activeArrayIndex = +params.get('machineToolElementId');
        this.formGroups = this.buildForms();
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(ToolMagazine.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new ToolMagazine(form.value));
    });
  }
}
