import {WorkTable} from './work-table.model';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {PalletStorageConfiguration} from '../types/pallet-storage-configuration.type';

export class Pallet extends WorkTable {
  random_access: boolean = null;
  table_width: number = null;
  table_length: number = null;
  number_of_pallet: number = null;
  storage_configuration?: PalletStorageConfiguration = null;
  pallet_change_time_minimum?: number = null;
  pallet_change_time_maximum?: number = null;
  pallet_type?: string = null;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
    console.log(this);
  }

  public static getFormControls(loadModel?: Pallet): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new Pallet();
    }
    return Object.assign(WorkTable.getFormControls(loadModel), {
      random_access: new FormControl(loadModel.random_access, Validators.required),
      table_width: new FormControl(loadModel.table_width, Validators.required),
      table_length: new FormControl(loadModel.table_length, Validators.required),
      number_of_pallet: new FormControl(loadModel.number_of_pallet, Validators.required),
      storage_configuration: new FormControl(loadModel.storage_configuration),
      pallet_change_time_minimum: new FormControl(loadModel.pallet_change_time_minimum),
      pallet_change_time_maximum: new FormControl(loadModel.pallet_change_time_maximum),
      pallet_type: new FormControl(loadModel.pallet_type),
    });
  }
}
