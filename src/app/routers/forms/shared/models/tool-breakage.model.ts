import {Sensor} from './sensor.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {DeviceId} from './device-id.model';

export class ToolBreakage extends Sensor {

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new ToolBreakage();
    }

    return Sensor.getFormControls(loadModel);
  }

}
