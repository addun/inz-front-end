import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';
import {elementCapabilityForm} from './element-capability.form';

export function barFeederForm(): DynamicFormControlModel[] {
  return elementCapabilityForm().concat([

      new DynamicInputModel({
        id: 'minimum_stock_diameter',
        label: 'Minimum stock diameter',
        required: true
      }),
      new DynamicInputModel({
        id: 'maximum_stock_diameter',
        label: 'Maximum stock diameter name',
        required: true
      }),
      new DynamicInputModel({
        id: 'maximum_stock_length',
        label: 'Maximum stock length',
        required: true
      }),

    ]
  );
}
