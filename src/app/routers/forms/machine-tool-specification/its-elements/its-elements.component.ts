import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {MachineToolElement} from '../../shared/models/machine-tool-element.model';

@Component({
  selector: 'inz-its-elements',
  templateUrl: './its-elements.component.html',
  styleUrls: ['./its-elements.component.sass']
})
export class ItsElementsComponent implements OnInit {
  machineToolElementsForm: FormGroup;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get machineToolElements(): any {
    return this.machineToolElementsForm.controls['machine_tool_elements'];
  }

  ngOnInit(): void {
    this.machineToolElementsForm = this.buildCapabilitiesForm();
  }

  buildCapabilitiesForm(): FormGroup {
    return new FormGroup({
      machine_tool_elements: new FormArray(this.loadMachineToolElementsForm())
    });
  }

  loadMachineToolElementsForm(): FormGroup[] {
    let machineToolElements = this.machineToolSpecificationService.machine_tool_specification.its_elements;

    if (!machineToolElements) {
      machineToolElements = [new MachineToolElement()];
    }

    return machineToolElements.map(model => {
      return new FormGroup(
        MachineToolElement.getFormControls(model)
      );
    });
  }

  addMachineToolElement() {
    const control = <FormArray>this.machineToolElements;
    control.push(new FormGroup(MachineToolElement.getFormControls()));
  }

  removeMachineToolElement(index: number) {
    const control = <FormArray>this.machineToolElements;
    control.removeAt(index);
  }

  saveAll() {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements = this.machineToolElements.value;
  }

}
