import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function deviceIdForm(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'id',
      label: 'Id',
      required: true
    }),
    new DynamicInputModel({
      id: 'model_name',
      label: 'Model name',
      required: true
    }),
    new DynamicInputModel({
      id: 'serial_name',
      label: 'Serial name',
      required: true
    }),
    new DynamicInputModel({
      id: 'manufacturer',
      label: 'Manufacturer',
      required: true
    }),
    new DynamicInputModel({
      id: 'data_manufactured',
      label: 'Data manufactured',
      inputType: 'date',
    }),
  ];
}
