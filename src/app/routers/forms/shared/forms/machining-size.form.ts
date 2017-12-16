import {DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER, DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function machiningSize(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'description',
      label: 'Description',
    }),
    new DynamicInputModel({
      id: 'x',
      label: 'x',
      inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
      required: true,
    }),
    new DynamicInputModel({
      id: 'y',
      label: 'y',
      inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
      required: true,
    }),
    new DynamicInputModel({
      id: 'z',
      label: 'z',
      inputType: DYNAMIC_FORM_CONTROL_INPUT_TYPE_NUMBER,
      required: true,
    }),
  ];
}