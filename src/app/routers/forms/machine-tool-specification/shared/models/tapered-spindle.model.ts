import {ToolSpindle} from './tool-spindle.model';
import {FormControl, Validators} from '@angular/forms';

export class TaperedSpindle extends ToolSpindle {
  spindle_taper_designation: string = null;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new TaperedSpindle();
    }
    return Object.assign(ToolSpindle.getFormControls(loadModel), {
      spindle_taper_designation: new FormControl(loadModel.spindle_taper_designation, Validators.required),
    });
  }
}
