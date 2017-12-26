import {Sensor} from './sensor.model';
import {ProbeType} from '../types/probe-type.type';

export class PartProbe extends Sensor {
  probe_type: ProbeType;
  dimensionality;
  setting_time;
}
