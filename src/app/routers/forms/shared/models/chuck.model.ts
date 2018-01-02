import {ElementCapability} from './element-capability.model';
import {FormControl, Validators} from '@angular/forms';

export class Chuck extends ElementCapability {
  minimum_part_diameter: string = null;
  maximum_part_diameter: string = null;
  number_of_jaws: number = null;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new Chuck();
    }

    return Object.assign(ElementCapability.getFormControls(loadModel), {
      minimum_part_diameter: new FormControl(loadModel.minimum_part_diameter, Validators.required),
      maximum_part_diameter: new FormControl(loadModel.maximum_part_diameter, Validators.required),
      number_of_jaws: new FormControl(loadModel.number_of_jaws, Validators.required),
    });
  }
}
