import {Injectable} from '@angular/core';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {machineToolElementForm} from '../../../../../shared/forms/machine-tool-element.form';
import {chuckForm} from '../../../../../shared/forms/chuck.form';
import {barFeederForm} from '../../../../../shared/forms/bar-feeder.form';
import {tailstockForm} from '../../../../../shared/forms/tailstock.form';
import {colletForm} from '../../../../../shared/forms/collet.form';

@Injectable()
export class MachineToolElementsService {
  machineToolElementsModel: DynamicFormControlModel[] = this.generateClearArray(machineToolElementForm);
  chuckModel: DynamicFormControlModel[] = this.generateClearArray(chuckForm);
  collet: DynamicFormControlModel[] = this.generateClearArray(colletForm);
  tailstock: DynamicFormControlModel[] = this.generateClearArray(tailstockForm);

  private barFeederArray: DynamicFormControlModelArray = [];
  private tailstockArray: DynamicFormControlModelArray = [];

  constructor(private dynamicFormService: DynamicFormService) {
  }

  getBarFeederModel(index: number): DynamicFormControlModel[] {
    return this.generateArrayIndex(index, this.barFeederArray, barFeederForm)[index];
  }

  getTailstockArray(index: number) {
    return this.generateArrayIndex(index, this.tailstockArray, tailstockForm)[index];
  }

  getData() {
    let machineToolElement = this.getValues(this.machineToolElementsModel);
    machineToolElement = machineToolElement.map((value, index) => {
      value['capabilities'] = []
        .concat(this.getValues(this.getBarFeederModel(index)))
        .concat(this.getValues(this.getTailstockArray(index)))
      ;
      return value;
    });

    return machineToolElement;
  }

  private generateArrayIndex(index: number, array: DynamicFormControlModelArray, form: () => DynamicFormControlModel[]) {
    if (!array[index]) {
      array[index] = this.generateClearArray(form);
    }
    return array;
  }

  private getValues(model: DynamicFormControlModel[]): any {
    const value = this.dynamicFormService.createFormGroup(model).value;
    return value['array'] ? value['array'] : value;
  }


  private generateClearArray(groupFactory: () => DynamicFormControlModel[]) {
    return [
      new DynamicFormArrayModel({
        id: 'array',
        initialCount: 0,
        groupFactory: groupFactory
      })
    ];
  }

}


declare type DynamicFormControlModelArray = (DynamicFormControlModel[])[]
