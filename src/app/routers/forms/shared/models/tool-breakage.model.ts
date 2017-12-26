import {Sensor} from './sensor.model';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {DeviceId} from './device-id.model';

export class ToolBreakage extends Sensor {

  public static getFormControls(loadModel?: ToolBreakage): { [key: string]: AbstractControl } {
    return {
      description: new FormControl((loadModel ? loadModel.description : null)),
      device_id: new FormGroup(
        DeviceId.getFormControls()
      )
    };
  }

}
