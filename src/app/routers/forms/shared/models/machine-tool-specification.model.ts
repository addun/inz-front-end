import {MachineTool} from './machine-tool.model';
import {MachineClass} from '../types/machine-class.type';
import {DeviceId} from './device-id.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MachiningCapability} from './machining-capability.model';
import {MachineToolElement} from './machine-tool-element.model';
import {Installation} from './installation.model';
import {Location} from './location.model';


export class MachineToolSpecification extends MachineTool {
  machine_class: MachineClass;
  device_id: DeviceId = new DeviceId();
  machining_capabilities: MachiningCapability[] = [];
  location: Location = new Location();
  installation: Installation = new Installation();
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
      machine_class: new FormControl(loadModel.machine_class, Validators.required),
      device_id: new FormGroup(DeviceId.getFormControls(loadModel.device_id)),
      location: new FormGroup(Location.getFormControls(loadModel.location)),
    });
  }
}
