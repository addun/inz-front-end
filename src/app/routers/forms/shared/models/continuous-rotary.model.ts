import {RotaryAxis} from './rotary-axis.model';

export class ContinuousRotary extends RotaryAxis {
  public static getFormControls(loadModel?: RotaryAxis) {
    if (!loadModel) {
      loadModel = new ContinuousRotary();
    }
    return RotaryAxis.getFormControls(loadModel);
  }
}
