import {WorkTable} from './work-table.model';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

export class CircularWorkTable extends WorkTable {
  table_diameter: number = null;

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?: CircularWorkTable): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new CircularWorkTable();
    }
    return Object.assign(WorkTable.getFormControls(loadModel), {
      table_diameter: new FormControl(loadModel.table_diameter, Validators.required),
    });
  }
}
