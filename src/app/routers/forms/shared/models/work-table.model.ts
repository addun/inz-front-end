import {ElementCapability} from './element-capability.model';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Chuck} from './chuck.model';
import {FixtureStyle} from '../types/fixture-type.type';
import {TSlot} from './t-slot.model';

export abstract class WorkTable extends ElementCapability {
  rotatable: boolean = null;
  workpiece_weight?: number = null;
  fixture_style?: FixtureStyle = null;
  chuck: Chuck = new Chuck();
  t_slot: TSlot = new TSlot();

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }


  public static getFormControls(loadModel?: WorkTable): { [key: string]: AbstractControl } {
    return Object.assign(ElementCapability.getFormControls(loadModel), {
      rotatable: new FormControl((loadModel ? loadModel.rotatable : null)),
      workpiece_weight: new FormControl((loadModel ? loadModel.workpiece_weight : null)),
      fixture_style: new FormControl((loadModel ? loadModel.fixture_style : null)),
      chuck: new FormGroup(Chuck.getFormControls(loadModel.chuck)),
      t_slot: new FormGroup(TSlot.getFormControls(loadModel.t_slot)),
    });
  }
}

