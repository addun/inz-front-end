import {FormControl, Validators} from '@angular/forms';

export class MeasuringCapability {
  measuring_accuracy: string = null;
  description?: string = null;

  public static getFormControls(loadModel?: MeasuringCapability) {
    if (!loadModel) {
      loadModel = new MeasuringCapability();
    }

    return {
      measuring_accuracy: new FormControl(loadModel.measuring_accuracy, Validators.required),
      description: new FormControl(loadModel.description),
    };
  }
}
