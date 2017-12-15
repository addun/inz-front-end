import {DynamicFormControlModel, DynamicFormGroupModel, DynamicInputModel, DynamicSelectModel} from '@ng-dynamic-forms/core';
import {machiningSize} from './machining-size.form';

export function machiningCapabilityForm(): DynamicFormControlModel[] {
  return [

    new DynamicSelectModel({
      id: 'capability',
      label: 'Capability',
      options: [
        {
          label: 'Boring Capability',
          value: 'BORING_CAPABILITY',
        },
        {
          label: 'Drilling Capability',
          value: 'DRILLING_CAPABILITY'
        },
        {
          label: 'Gundrill Capability',
          value: 'GUNDRILL_CAPABILITY'
        },
        {
          label: 'Milling Capability',
          value: 'MILLING_CAPABILITY'
        },
        {
          label: 'Turning Capability',
          value: 'TURNING_CAPABILITY'
        }
      ],
    }),

    new DynamicInputModel({
      id: 'machining_accuracy',
      label: 'Machining Accuracy'
    }),

    new DynamicInputModel({
      id: 'text',
      label: 'Text',
    }),

    new DynamicFormGroupModel({
      id: 'machining_size',
      legend: 'Machining Size',
      group: machiningSize()
    }),
  ];
}
