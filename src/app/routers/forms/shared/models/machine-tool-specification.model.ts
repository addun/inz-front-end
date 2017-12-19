import {MachineTool} from './machine-tool.model';
import {MachineClass} from '../types/machine-class.type';
import {DeviceId} from './device-id.model';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {MachiningCapability} from './machining-capability.model';
import {MachineToolElement} from './machine-tool-element.model';

export class MachineToolSpecification extends MachineTool {
  machine_class: MachineClass;
  device_id: DeviceId = new DeviceId();
  machining_capabilities: MachiningCapability[] = [];
  its_elements: MachineToolElement[] = [];

  constructor(machineToolSpecification?) {
    super(machineToolSpecification);
    Object.assign(this, machineToolSpecification || {});
  }


  public static getFormControls(loadModel?: MachineToolSpecification): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new MachineToolSpecification();
    }

    return Object.assign(MachineTool.getFormControls(loadModel), {
      machine_class: new FormControl(loadModel.machine_class, Validators.required)
    });
  }
}
