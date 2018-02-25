import {ElementCapability} from './element-capability.model';
import {FormControl, Validators} from '@angular/forms';

export class MachineToolAxis extends ElementCapability {
  axis_name: string;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }


  public static getFormControls(loadModel?: MachineToolAxis) {
    if (!loadModel) {
      loadModel = new MachineToolAxis();
    }

    return Object.assign(ElementCapability.getFormControls(loadModel), {
      axis_name: new FormControl(loadModel.axis_name, Validators.required)
    });
  }
}
