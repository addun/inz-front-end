import {ToolHandlingUnit} from './tool-handling-unit.model';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class ToolChanger extends ToolHandlingUnit {
  spindle_name: string = null;
  cut_to_cut_min_tool_change_time?: number = null;
  cut_to_cut_max_tool_change_time?: number = null;

  public static getFormControls(loadModel?): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new ToolChanger();
    }

    return Object.assign(ToolHandlingUnit.getFormControls(loadModel), {
      spindle_name: new FormControl(loadModel.spindle_name, Validators.required),
      cut_to_cut_min_tool_change_time: new FormControl(loadModel.cut_to_cut_min_tool_change_time, Validators.required),
      cut_to_cut_max_tool_change_time: new FormControl(loadModel.cut_to_cut_max_tool_change_time, Validators.required),
    });
  }
}
