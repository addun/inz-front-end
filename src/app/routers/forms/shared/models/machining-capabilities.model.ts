import {MachiningSize} from './machining-size.model';
import {MachiningCapabilityProfile} from '../types/machining-capability-profile.type';

export class MachiningCapability {
  capability: MachiningCapabilityProfile;
  machining_accuracy?: string;
  description ?: string;
  machining_size?: MachiningSize;
}
