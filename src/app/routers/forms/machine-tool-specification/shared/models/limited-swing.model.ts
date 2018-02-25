import {RotaryAxis} from './rotary-axis.model';
import {FormControl, Validators} from '@angular/forms';

export class LimitedSwing extends RotaryAxis {
  minimum_angle_of_motion: string;
  maximum_angle_of_motion: string;
  axis_travel_limit: boolean;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new LimitedSwing();
    }

    return Object.assign(RotaryAxis.getFormControls(loadModel), {
      minimum_angle_of_motion: new FormControl(loadModel.minimum_angle_of_motion, Validators.required),
      maximum_angle_of_motion: new FormControl(loadModel.maximum_angle_of_motion, Validators.required),
      axis_travel_limit: new FormControl(loadModel.axis_travel_limit, Validators.required),
    });
  }
}
