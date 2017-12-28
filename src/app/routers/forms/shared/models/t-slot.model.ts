import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class TSlot {
  number_of_t_slots: number;
  t_slot_size: number;
  distance_between_t_slot_centres: number;

  public static getFormControls(loadModel?: TSlot): { [key: string]: AbstractControl } {
    return {
      number_of_t_slots: new FormControl((loadModel ? loadModel.number_of_t_slots : null), Validators.required),
      t_slot_size: new FormControl((loadModel ? loadModel.t_slot_size : null), Validators.required),
      distance_between_t_slot_centres: new FormControl((loadModel ? loadModel.distance_between_t_slot_centres : null), Validators.required),
    };
  }
}
