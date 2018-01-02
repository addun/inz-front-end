import {Spindle} from './spindle.model';
import {FormControl, Validators} from '@angular/forms';

export abstract class ToolSpindle extends Spindle {
  spindle_tool_holder_style_designation: string = null;
  coolant_through_spindle: boolean = null;

  public static getFormControls(loadModel?) {
    return Object.assign(Spindle.getFormControls(loadModel), {
      spindle_tool_holder_style_designation: new FormControl(loadModel.spindle_tool_holder_style_designation, Validators.required),
      coolant_through_spindle: new FormControl(loadModel.coolant_through_spindle, Validators.required),
    });
  }
}
