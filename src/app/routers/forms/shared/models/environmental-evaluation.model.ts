import {FormControl, Validators} from '@angular/forms';
import {StandardMachiningProcess} from './standard-machining-process.model';

export class EnvironmentalEvaluation {
  evaluation_name: string = null;
  power_in_idling: string = null;
  time_for_warming_up: string = null;
  power_for_standard_machining: StandardMachiningProcess[] = [];

  constructor(environmentalEvaluation?) {
    Object.assign(this, environmentalEvaluation);
  }

  public static getFormControls(loadModel?: EnvironmentalEvaluation) {
    if (!loadModel) {
      loadModel = new EnvironmentalEvaluation();
    }

    return {
      evaluation_name: new FormControl(loadModel.evaluation_name, Validators.required),
      power_in_idling: new FormControl(loadModel.power_in_idling),
      time_for_warming_up: new FormControl(loadModel.time_for_warming_up),
    };
  }
}
