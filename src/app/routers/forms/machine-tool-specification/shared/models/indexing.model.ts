import {RotaryAxis} from './rotary-axis.model';
import {FormControl, Validators} from '@angular/forms';

export class Indexing extends RotaryAxis {
  index_increment: string;

  public static getFormControls(loadModel?: Indexing) {
    if (!loadModel) {
      loadModel = new Indexing();
    }

    return Object.assign(RotaryAxis.getFormControls(loadModel), {
      index_increment: new FormControl(loadModel.index_increment, Validators.required),
    });
  }
}
