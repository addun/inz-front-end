import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function elementCapability(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'description',
      label: 'Description'
    })

  ];
}
