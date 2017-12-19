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
  deviceIdForm: FormGroup;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get deviceId() {
    return this.machineToolSpecificationService.machine_tool_specification.device_id;
  }

  set deviceId(deviceId: DeviceId) {
    this.machineToolSpecificationService.machine_tool_specification.device_id = deviceId;
  }

  ngOnInit() {
    this.deviceIdForm = this.buildForm();
  }

  saveForm() {
    this.deviceId = new DeviceId(this.deviceIdForm.value);
  }

  private buildForm() {
    return new FormGroup(
      DeviceId.getFormControls(
        this.deviceId
      )
    );
  }

}
