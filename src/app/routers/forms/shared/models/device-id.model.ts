import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class DeviceId {
  id: string = null;
  model_name: string = null;
  serial_number: string = null;
  manufacturer: string = null;
  date_manufactured?: string = null;

  constructor(deviceId?) {
    Object.assign(this, deviceId);
  }


  public static getFormControls(loadModel?: DeviceId): { [key: string]: AbstractControl } {
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
