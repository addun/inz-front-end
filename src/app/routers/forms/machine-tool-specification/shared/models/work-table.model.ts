import {ElementCapability} from './element-capability.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
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


  public static getFormControls(loadModel?): { [key: string]: AbstractControl } {
    return Object.assign(ElementCapability.getFormControls(loadModel), {
      rotatable: new FormControl(loadModel.rotatable, Validators.required),
      workpiece_weight: new FormControl(loadModel.workpiece_weight),
      fixture_style: new FormControl(loadModel.fixture_style),
      chuck: new FormGroup(Chuck.getFormControls(loadModel.chuck)),
      t_slot: new FormGroup(TSlot.getFormControls(loadModel.t_slot)),
    });
  }
}

