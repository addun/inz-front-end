import {Sensor} from './sensor.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProbeType} from '../types/probe-type.type';
import {DeviceId} from './device-id.model';

export class ToolSetting extends Sensor {
  probe_type: ProbeType;
  measuring_radius: boolean;
  measuring_length: boolean;
  measure_time: string;


  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new ToolSetting();
    }

    return Object.assign( Sensor.getFormControls(loadModel), {
      measuring_radius: new FormControl(loadModel.measuring_radius, Validators.required),
      measuring_length: new FormControl(loadModel.measuring_length, Validators.required),
      measure_time: new FormControl(loadModel.measure_time, Validators.required),
      probe_type: new FormControl(loadModel.probe_type, Validators.required),
    });
  }
}
