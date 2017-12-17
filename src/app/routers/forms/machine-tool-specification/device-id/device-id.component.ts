import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DeviceId} from '../../shared/models/device-id.model';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-device-id',
  templateUrl: './device-id.component.html',
  styleUrls: ['./device-id.component.sass']
})
export class DeviceIdComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.formGroup = this.buildForm();
  }

  saveForm() {
    this.machineToolSpecificationService
      .machine_tool_specification.device_id = new DeviceId(this.formGroup.value);
  }

  private buildForm() {
    return new FormGroup(
      DeviceId.getControls(
        this.machineToolSpecificationService.machine_tool_specification.device_id
      )
    );
  }

}
