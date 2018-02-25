import {ElementCapability} from './element-capability.model';
import {CoolantType} from '../types/coolant-type.type';
import {MeansOfCoolantDelivery} from '../types/means-of-coolant-delivery.type';
import {FormControl, Validators} from '@angular/forms';

export class Coolant extends ElementCapability {
  coolant_type: CoolantType;
  means_of_delivery?: MeansOfCoolantDelivery;
  capacity_of_coolant_tank?: number;
  coolant_weight?: number;

  constructor(model?) {
    super();
    Object.assign(this, model);
  }


  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new Coolant();
    }

    return Object.assign(ElementCapability.getFormControls(loadModel), {
      coolant_type: new FormControl(loadModel.measuring_radius, Validators.required),
      means_of_delivery: new FormControl(loadModel.measuring_radius),
      capacity_of_coolant_tank: new FormControl(loadModel.measuring_radius),
      coolant_weight: new FormControl(loadModel.coolant_weight),
    });
  }

}
