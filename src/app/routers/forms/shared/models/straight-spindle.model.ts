import {ToolSpindle} from './tool-spindle.model';
import {FormControl, Validators} from '@angular/forms';

export class StraightSpindle extends ToolSpindle {
  spindle_bore_depth: number = null;
  spindle_bore_diameter: number = null;

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new StraightSpindle();
    }
    return Object.assign(ToolSpindle.getFormControls(loadModel), {
      spindle_bore_depth: new FormControl(loadModel.spindle_bore_depth, Validators.required),
      spindle_bore_diameter: new FormControl(loadModel.spindle_bore_diameter, Validators.required),
    });
  }
}
