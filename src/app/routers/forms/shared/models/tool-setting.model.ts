import {Sensor} from './sensor.model';
import {FormControl, Validators} from '@angular/forms';
import {ProbeType} from '../types/probe-type.type';

export class ToolSetting extends Sensor {
  probe_type: ProbeType;
  measuring_radius: boolean;
  measuring_length: boolean;
  measure_time: string;


  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new ToolSetting();
    }

    return {
      description: new FormControl(loadModel.description),
      probe_type: new FormControl(loadModel.probe_type, Validators.required),
      measuring_radius: new FormControl(loadModel.measuring_radius, Validators.required),
      measuring_length: new FormControl(loadModel.measuring_length, Validators.required),
      measure_time: new FormControl(loadModel.measure_time, Validators.required),
    };
  }
}
