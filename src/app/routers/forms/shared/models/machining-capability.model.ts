import {MachiningSize} from './machining-size.model';
import {MachiningCapabilityProfile} from '../types/machining-capability-profile.type';
import {FormControl, Validators} from '@angular/forms';

export class MachiningCapability {
  capability: MachiningCapabilityProfile = MachiningCapabilityProfile.BORING_CAPABILITY;
  machining_accuracy?: string;
  description ?: string;
  machining_size?: MachiningSize;

  public static getFormControls(loadModel?: MachiningCapability) {
    if (!loadModel) {
      loadModel = new MachiningCapability();
    }

    return {
      capability: new FormControl(loadModel.capability, Validators.required),
      machining_accuracy: new FormControl(loadModel.capability),
      description: new FormControl(loadModel.capability),
    };
  }
}
