import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class DeviceId {
  id = '';
  model_name = '';
  serial_number = '';
  manufacturer = '';
  date_manufactured?;

  constructor(data?: any) {
    Object.assign(this, data);
  }

  public static getControls(loadModel?: DeviceId): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new DeviceId();
    }
    return {
      id: new FormControl(loadModel.id, Validators.required),
      model_name: new FormControl(loadModel.model_name, Validators.required),
      serial_number: new FormControl(loadModel.serial_number, Validators.required),
      manufacturer: new FormControl(loadModel.manufacturer, Validators.required),
      date_manufactured: new FormControl(loadModel.date_manufactured),
    };
  }
}