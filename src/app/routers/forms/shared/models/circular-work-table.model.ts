import {WorkTable} from './work-table.model';
import {AbstractControl, FormControl} from '@angular/forms';

export class CircularWorkTable extends WorkTable {
  table_diameter: number;

  public static getFormControls(loadModel?: CircularWorkTable): { [key: string]: AbstractControl } {
    return Object.assign(WorkTable.getFormControls(loadModel), {
      table_diameter: new FormControl((loadModel ? loadModel.table_diameter : null)),
    });
  }
}
