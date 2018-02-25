import {RotaryAxis} from './rotary-axis.model';

export class ContinuousRotary extends RotaryAxis {

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?: RotaryAxis) {
    if (!loadModel) {
      loadModel = new ContinuousRotary();
    }
    return RotaryAxis.getFormControls(loadModel);
  }
}
