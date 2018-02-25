import {ElementCapability} from './element-capability.model';
import {FormControl, Validators} from '@angular/forms';

export class Collet extends ElementCapability {
  collet_type: string = null;
  minimum_part_diameter: number = null;
  maximum_part_diameter: number = null;

  constructor(model?) {
    super();
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new Collet();
    }

    return Object.assign(ElementCapability.getFormControls(loadModel), {
      collet_type: new FormControl(loadModel.collet_type, Validators.required),
      minimum_part_diameter: new FormControl(loadModel.minimum_part_diameter, Validators.required),
      maximum_part_diameter: new FormControl(loadModel.maximum_part_diameter, Validators.required),
    });
  }
}
