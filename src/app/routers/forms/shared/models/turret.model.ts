import {ToolHandlingUnit} from './tool-handling-unit.model';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToolAssembly} from './tool-assembly.model';

export class Turret extends ToolHandlingUnit {
  spindle_name: string[] = [];
  number_of_fixed_tools: number = null;
  number_of_rotating_tools: number = null;
  cut_to_cut_min_turret_index_time?: string = null;
  cut_to_cut_max_turret_index_time?: string = null;
  turret_contents: ToolAssembly[] = [];

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new Turret();
    }

    const formControls = Object.assign(ToolHandlingUnit.getFormControls(loadModel), {
      spindle_name: new FormArray([]),
      number_of_fixed_tools: new FormControl(loadModel.number_of_fixed_tools, Validators.required),
      number_of_rotating_tools: new FormControl(loadModel.number_of_rotating_tools, Validators.required),
      cut_to_cut_min_turret_index_time: new FormControl(loadModel.cut_to_cut_min_turret_index_time),
      cut_to_cut_max_turret_index_time: new FormControl(loadModel.cut_to_cut_max_turret_index_time),
      turret_contents: new FormArray([])
    });

    loadModel.spindle_name.forEach(element => {
      formControls.spindle_name.push(
        new FormControl(element)
      );
    });

    loadModel.turret_contents.forEach(element => {
      formControls.turret_contents.push(new FormGroup(
        ToolAssembly.getFormControls(element)
      ));
    });

    return formControls;
  }
}
