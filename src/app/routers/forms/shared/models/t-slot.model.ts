import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class TSlot {
  number_of_t_slots: number = null;
  t_slot_size: number = null;
  distance_between_t_slot_centers: number = null;

  constructor(model?) {
    Object.assign(this, model);
  }


  public static getFormControls(loadModel?: TSlot): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new TSlot();
    }
    return {
      number_of_t_slots: new FormControl(loadModel.number_of_t_slots, Validators.required),
      t_slot_size: new FormControl(loadModel.t_slot_size, Validators.required),
      distance_between_t_slot_centers: new FormControl(loadModel.distance_between_t_slot_centers, Validators.required),
    };
  }
}
