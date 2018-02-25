import {ToolSpindle} from './tool-spindle.model';
import {FormControl, Validators} from '@angular/forms';

export class ThreadedSpindle extends ToolSpindle {
  spindle_thread_diameter: number = null;
  spindle_thread_pitch: number = null;
  spindle_thread_form: string = null;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new ThreadedSpindle();
    }
    return Object.assign(ToolSpindle.getFormControls(loadModel), {
      spindle_thread_diameter: new FormControl(loadModel.spindle_thread_diameter, Validators.required),
      spindle_thread_pitch: new FormControl(loadModel.spindle_thread_pitch, Validators.required),
      spindle_thread_form: new FormControl(loadModel.spindle_thread_form, Validators.required),
    });
  }
}
