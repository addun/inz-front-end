import {Sensor} from './sensor.model';
import {ProbeType} from '../types/probe-type.type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SensorDimensionality} from '../types/sensor-dimensionality.type';
import {DeviceId} from './device-id.model';

export class PartProbe extends Sensor {
  probe_type: ProbeType;
  dimensionality: SensorDimensionality;
  setting_time: string;


  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new PartProbe();
    }

    return {
      description: new FormControl(loadModel.description),
      probe_type: new FormControl(loadModel.probe_type, Validators.required),
      dimensionality: new FormControl(loadModel.dimensionality, Validators.required),
      setting_time: new FormControl(loadModel.setting_time, Validators.required),
      device_id: new FormGroup(
        DeviceId.getFormControls()
      )
    };
  }
}
