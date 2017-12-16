import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';
import {elementCapabilityForm} from './element-capability.form';

export function chuckForm(): DynamicFormControlModel[] {
  return elementCapabilityForm().concat([

    new DynamicInputModel({
      id: 'minimum_part_diameter',
      label: 'Minimum part diameter',
      required: true
    }),
    new DynamicInputModel({
      id: 'maximum_part_diameter',
      label: 'Maximum part diameter',
      required: true
    }),
    new DynamicInputModel({
      id: 'number_of_jaws',
      label: 'Number of jaws',
      required: true
    }),

  ]);
}
