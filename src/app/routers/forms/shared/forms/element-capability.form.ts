import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function elementCapabilityForm(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'description',
      label: 'Description'
    })

  ];
}
