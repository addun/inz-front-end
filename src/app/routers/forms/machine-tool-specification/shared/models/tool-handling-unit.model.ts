import {ElementCapability} from './element-capability.model';

export abstract class ToolHandlingUnit extends ElementCapability {
  public static getFormControls(loadModel?) {
    return ElementCapability.getFormControls(loadModel);
  }
}
