import {SpindleRange} from './spindle-range.model';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {ElementCapability} from './element-capability.model';

export class Spindle extends ElementCapability {
  spindle_power: number;
  spindle_name: string;
  spindle_manufacturer?: string;
  manufacturer_model_designation?: string;
  range: SpindleRange[] = [];

  constructor(model?) {
    super(model);
    Object.assign(model);
  }

  public static getFormControls(loadModel?: Spindle): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new Spindle();
    }
    return Object.assign(ElementCapability.getFormControls(loadModel), {
      spindle_power: new FormControl(loadModel.spindle_power, Validators.required),
      spindle_name: new FormControl(loadModel.spindle_name, Validators.required),
      spindle_manufacturer: new FormControl(loadModel.spindle_manufacturer),
      manufacturer_model_designation: new FormControl(loadModel.manufacturer_model_designation),
    });
  }
}
