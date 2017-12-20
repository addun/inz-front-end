import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class Location {
  business_unit: string;
  plant_location: string;
  building: string;
  cell: string;


  constructor(location?) {
    Object.assign(this, location || {});
  }

  public static getFormControls(loadModel?: Location): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new Location();
    }
    return {
      business_unit: new FormControl((loadModel.business_unit), Validators.required),
      plant_location: new FormControl((loadModel.plant_location), Validators.required),
      building: new FormControl((loadModel.building), Validators.required),
      cell: new FormControl((loadModel.cell), Validators.required),
    };
  }
}
