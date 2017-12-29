import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class SpindleRange {
  minimum_drive_speed: number;
  maximum_drive_speed: number;
  minimum_drive_torque: number;
  maximum_drive_torque: number;

  public static getFormControls(loadModel?: SpindleRange): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new SpindleRange();
    }
    return {
      minimum_drive_speed: new FormControl(loadModel.minimum_drive_speed, Validators.required),
      maximum_drive_speed: new FormControl(loadModel.maximum_drive_speed, Validators.required),
      minimum_drive_torque: new FormControl(loadModel.minimum_drive_torque, Validators.required),
      maximum_drive_torque: new FormControl(loadModel.maximum_drive_torque, Validators.required),
    };
  }
}
