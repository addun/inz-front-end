import {Injectable} from '@angular/core';
import {DynamicFormArrayModel, DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {machineToolElementForm} from '../../../../../shared/forms/machine-tool-element.form';

@Injectable()
export class MachineToolElementsService {
  machineToolElementsModel: DynamicFormControlModel[] = [
    new DynamicFormArrayModel({
      id: 'array',
      initialCount: 1,
      groupFactory: machineToolElementForm
    })
  ];


  constructor() {
  }

}
