import {ElementCapability} from './element-capability.model';
import {DeviceId} from './device-id.model';

export abstract class Sensor extends ElementCapability {
  device_id: DeviceId = new DeviceId();
}
