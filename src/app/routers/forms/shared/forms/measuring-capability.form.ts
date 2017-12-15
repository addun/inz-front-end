import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function measuringCapabilityForm(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'measuring_accuracy',
      label: 'Measuring Accuracy'
    }),
    new DynamicInputModel({
      id: 'description',
      label: 'Description'
    }),

  ];
}
