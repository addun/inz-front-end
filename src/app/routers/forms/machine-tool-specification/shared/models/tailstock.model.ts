import {ElementCapability} from './element-capability.model';
import {FormControl, Validators} from '@angular/forms';

export class Tailstock extends ElementCapability {
  spindle_name: string = null;
  taper: string = null;
  maximum_workpiece_weight_of_quill: number = null;

  constructor(model?) {
    super();
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new Tailstock();
    }

    return Object.assign(ElementCapability.getFormControls(loadModel), {
      spindle_name: new FormControl(loadModel.spindle_name, Validators.required),
      taper: new FormControl(loadModel.taper, Validators.required),
      maximum_workpiece_weight_of_quill: new FormControl(loadModel.maximum_workpiece_weight_of_quill, Validators.required),
    });
  }
}
