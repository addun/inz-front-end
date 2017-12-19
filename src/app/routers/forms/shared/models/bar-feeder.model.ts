import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {ElementCapability} from './element-capability.model';

export class BarFeeder extends ElementCapability {
  minimum_stock_diameter: number;
  maximum_stock_diameter: number;
  maximum_stock_length: number;


  public static getFormControls(loadModel?: BarFeeder): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new BarFeeder();
    }
    return Object.assign({}, ElementCapability.getFormControls(loadModel), {
      minimum_stock_diameter: new FormControl(loadModel.minimum_stock_diameter, Validators.required),
      maximum_stock_diameter: new FormControl(loadModel.maximum_stock_diameter, Validators.required),
      maximum_stock_length: new FormControl(loadModel.maximum_stock_length, Validators.required),
    });
  }
}
