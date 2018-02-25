import {MachineToolAxis} from './machine-tool-axis.model';
import {FormControl, Validators} from '@angular/forms';

export class LinearAxis extends MachineToolAxis {
  minimum_range_of_motion: number = null;
  maximum_range_of_motion: number = null;
  displacement_error: string = null;
  repeatability_error: number = null;
  rapid_traverse_feed_rate: number = null;
  minimum_cutting_feed_rate: number = null;
  maximum_cutting_feed_rate: number = null;
  maximum_acceleration?: number = null;
  maximum_deceleration?: number = null;
  maximum_jerk?: number = null;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?: LinearAxis) {
    if (!loadModel) {
      loadModel = new LinearAxis();
    }

    return Object.assign(MachineToolAxis.getFormControls(loadModel), {
      minimum_range_of_motion: new FormControl(loadModel.minimum_range_of_motion, Validators.required),
      maximum_range_of_motion: new FormControl(loadModel.maximum_range_of_motion, Validators.required),
      displacement_error: new FormControl(loadModel.displacement_error, Validators.required),
      repeatability_error: new FormControl(loadModel.repeatability_error, Validators.required),
      rapid_traverse_feed_rate: new FormControl(loadModel.rapid_traverse_feed_rate, Validators.required),
      minimum_cutting_feed_rate: new FormControl(loadModel.minimum_cutting_feed_rate, Validators.required),
      maximum_cutting_feed_rate: new FormControl(loadModel.maximum_cutting_feed_rate, Validators.required),
      maximum_acceleration: new FormControl(loadModel.maximum_acceleration),
      maximum_deceleration: new FormControl(loadModel.maximum_deceleration),
      maximum_jerk: new FormControl(loadModel.maximum_jerk),
    });
  }
}
