import {Component, OnInit} from '@angular/core';
import {MachiningCapability} from '../../shared/models/machining-capability.model';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-machining-capability',
  templateUrl: './machining-capabilities.component.html',
  styleUrls: ['./machining-capabilities.component.sass']
})
export class MachiningCapabilitiesComponent implements OnInit {
  machiningCapabilityForms: FormGroup[];
  generator = MachiningCapability.getFormControls;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit(): void {
    this.machiningCapabilityForms = this.buildForms();
  }

  buildForms(): FormGroup[] {
    return this.machineToolSpecificationService.machine_tool_specification.machining_capabilities.map(capability => {
      return new FormGroup(MachiningCapability.getFormControls(capability));
    });
  }

  save() {
    this.machineToolSpecificationService.machine_tool_specification.machining_capabilities = [];
    this.machiningCapabilityForms.forEach(form => {
      this.machineToolSpecificationService.machine_tool_specification.machining_capabilities.push(new MachiningCapability(form.value));
    });
  }

}
