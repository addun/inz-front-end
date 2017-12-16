import {DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function machineToolElementForm(): DynamicFormControlModel[] {
  return [
    new DynamicInputModel({
      id: 'name',
      label: 'Name',
      required: true
    }),

    new DynamicInputModel({
      id: 'description',
      label: 'Description'
    }),

    new DynamicInputModel({
      id: 'weight',
      label: 'Weight',
      inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER
    })
  ];
}
