import {MachineToolAxis} from './machine-tool-axis.model';
import {FormControl, Validators} from '@angular/forms';

export abstract class RotaryAxis extends MachineToolAxis {
  displacement_angle_error: string;
  repeatability_angle_error: string;
  rapid_traverse_rotation_feed_rate: number;
  minimum_cutting_rotation_feed_rate: number;
  maximum_cutting_rotation_feed_rate: number;
  maximum_rotation_acceleration?: number;
  maximum_rotation_deceleration?: number;
  maximum_rotation_jerk?: number;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?: RotaryAxis) {
    return Object.assign(MachineToolAxis.getFormControls(loadModel), {
      displacement_angle_error: new FormControl(loadModel.displacement_angle_error, Validators.required),
      repeatability_angle_error: new FormControl(loadModel.repeatability_angle_error, Validators.required),
      rapid_traverse_rotation_feed_rate: new FormControl(loadModel.rapid_traverse_rotation_feed_rate, Validators.required),
      minimum_cutting_rotation_feed_rate: new FormControl(loadModel.minimum_cutting_rotation_feed_rate, Validators.required),
      maximum_cutting_rotation_feed_rate: new FormControl(loadModel.maximum_cutting_rotation_feed_rate),
      maximum_rotation_acceleration: new FormControl(loadModel.maximum_rotation_acceleration),
      maximum_rotation_deceleration: new FormControl(loadModel.maximum_rotation_deceleration),
      maximum_rotation_jerk: new FormControl(loadModel.maximum_rotation_jerk),
    });
  }
}
