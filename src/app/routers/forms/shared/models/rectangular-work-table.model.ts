import {WorkTable} from './work-table.model';
import {AbstractControl, FormControl} from '@angular/forms';

export class RectangularWorkTable extends WorkTable {
  table_width: number;
  table_length: number;

  public static getFormControls(loadModel?: RectangularWorkTable): { [key: string]: AbstractControl } {
    return Object.assign(WorkTable.getFormControls(loadModel), {
      table_width: new FormControl((loadModel ? loadModel.table_width : null)),
      table_length: new FormControl((loadModel ? loadModel.table_length : null)),
    });
  }
}
