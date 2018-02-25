import {ElementCapability} from './element-capability.model';
import {DeviceId} from './device-id.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

export abstract class Sensor extends ElementCapability {
  device_id: DeviceId = new DeviceId();

  public static getFormControls(loadModel?: Sensor) {
    return Object.assign( ElementCapability.getFormControls(loadModel), {
      device_id: new FormGroup(
        DeviceId.getFormControls(loadModel.device_id)
      )
    });
  }
}
