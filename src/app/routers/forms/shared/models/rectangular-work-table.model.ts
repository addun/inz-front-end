import {WorkTable} from './work-table.model';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class RectangularWorkTable extends WorkTable {
  table_width: number = null;
  table_length: number = null;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?: RectangularWorkTable): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new RectangularWorkTable();
    }
    return Object.assign(WorkTable.getFormControls(loadModel), {
      table_width: new FormControl(loadModel.table_width, Validators.required),
      table_length: new FormControl(loadModel.table_length, Validators.required),
    });
  }
}
