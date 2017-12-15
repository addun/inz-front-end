import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function locatorForm(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'business_unit',
      label: 'Business Unit',
      required: true
    }),
    new DynamicInputModel({
      id: 'plant_location',
      label: 'Plant Location',
      required: true
    }),
    new DynamicInputModel({
      id: 'building',
      label: 'Building',
      required: true
    }),
    new DynamicInputModel({
      id: 'cell',
      label: 'Cell',
      required: true
    }),
  ];
}
