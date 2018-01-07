import {Spindle} from './spindle.model';
import {Chuck} from './chuck.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export class WorkSpindle extends Spindle {
  spindle_nose_designation: string;
  spindle_bore_diameter: number;
  round_bar_stock_diameter?: number;
  through_hole_diameter?: number;
  hex_bar_stock_capacity?: number;
  chuck: Chuck = new Chuck();

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new WorkSpindle();
    }

    return Object.assign(Spindle.getFormControls(loadModel), {
      spindle_nose_designation: new FormControl(loadModel.spindle_nose_designation, Validators.required),
      spindle_bore_diameter: new FormControl(loadModel.spindle_bore_diameter, Validators.required),
      round_bar_stock_diameter: new FormControl(loadModel.round_bar_stock_diameter),
      through_hole_diameter: new FormControl(loadModel.through_hole_diameter),
      hex_bar_stock_capacity: new FormControl(loadModel.hex_bar_stock_capacity),
      chuck: new FormGroup(
        Chuck.getFormControls(loadModel.chuck)
      )
    });
  }
}
