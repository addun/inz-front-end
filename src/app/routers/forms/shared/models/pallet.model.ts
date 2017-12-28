import {WorkTable} from './work-table.model';
import {AbstractControl, FormControl} from '@angular/forms';
import {PalletStorageConfiguration} from '../types/pallet-storage-configuration.type';

export class Pallet extends WorkTable {
  random_access: boolean;
  table_width: number;
  table_length: number;
  number_of_pallets: number;
  storage_configuration: PalletStorageConfiguration;
  pallet_change_time_minimum: number;
  pallet_change_time_maximum: number;
  pallet_type: string;

  public static getFormControls(loadModel?: Pallet): { [key: string]: AbstractControl } {
    return Object.assign(WorkTable.getFormControls(loadModel), {
      random_access: new FormControl((loadModel ? loadModel.random_access : null)),
      table_width: new FormControl((loadModel ? loadModel.table_width : null)),
      table_length: new FormControl((loadModel ? loadModel.table_length : null)),
      number_of_pallets: new FormControl((loadModel ? loadModel.number_of_pallets : null)),
    });
  }
}
