import {MachineTool} from './machine-tool.model';
import {MachineClass} from '../types/machine-class.type';
import {DeviceId} from './device-id.model';
import {MachiningCapability} from './machining-capabilities.model';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class MachineToolSpecification extends MachineTool {
  machine_class: MachineClass = MachineClass.DRILLING_MACHINE;
  device_id: DeviceId = new DeviceId();
  machining_capabilities: MachiningCapability[] = [];


  public static getFormControls(loadModel?: MachineToolSpecification): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new MachineToolSpecification();
    }

    return Object.assign(MachineTool.getFormControls(loadModel), {
      machine_class: new FormControl(loadModel.machine_class, Validators.required)
    });
  }
}
