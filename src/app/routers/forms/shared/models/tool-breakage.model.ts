import {Sensor} from './sensor.model';

export class ToolBreakage extends Sensor {

  constructor(model?) {
    super();
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?) {
    if (!loadModel) {
      loadModel = new ToolBreakage();
    }

    return Sensor.getFormControls(loadModel);
  }

}
