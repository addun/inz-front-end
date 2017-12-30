import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {MachineToolElement} from '../../shared/models/machine-tool-element.model';

@Component({
  selector: 'inz-its-elements',
  templateUrl: './its-elements.component.html',
  styleUrls: ['./its-elements.component.sass']
})
export class ItsElementsComponent implements OnInit {
  machineToolElementsForms: FormGroup[];
  generator = MachineToolElement.getFormControls;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit(): void {
    this.machineToolElementsForms = this.buildForms();
  }

  buildForms(): FormGroup[] {
    return this.machineToolSpecificationService.machine_tool_specification.its_elements.map(capability => {
      return new FormGroup(MachineToolElement.getFormControls(capability));
    });
  }

  save() {
    this.machineToolSpecificationService.machine_tool_specification.its_elements = [];
    this.machineToolElementsForms.forEach(form => {
      this.machineToolSpecificationService.machine_tool_specification.its_elements.push(new MachineToolElement(form.value));
    });
  }

}
