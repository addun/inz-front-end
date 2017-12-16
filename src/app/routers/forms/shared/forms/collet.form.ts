import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';
import {elementCapabilityForm} from './element-capability.form';

export function colletForm(): DynamicFormControlModel[] {
  return elementCapabilityForm().concat([

    new DynamicInputModel({
      id: 'collet_type',
      label: 'Collet type',
      required: true
    }),
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

  ]);
}
