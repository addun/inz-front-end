import {DynamicFormControlModel, DynamicInputModel, DynamicSelectModel} from '@ng-dynamic-forms/core';


export function machineToolSpecificationForm(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'description',
      label: 'Description',
      required: true,
      errorMessages: {
        required: 'This field is require'
      }
    }),

    new DynamicSelectModel({
      id: 'machine_class',
      label: 'Machine Class',
      required: true,
      errorMessages: {
        required: 'This field is require'
      },
      options: [
        {
          label: 'Drilling Machine',
          value: 'DRILLING_MACHINE',
        }, {
          label: 'Gundrill Machine',
          value: 'GUNDRILL_MACHINE',
        }, {
          label: 'Machining Centre',
          value: 'MACHINING_CENTRE',
        }, {
          label: 'Milling Machine',
          value: 'MILLING_MACHINE',
        }, {
          label: 'Multi Tasking Machine',
          value: 'MULTI_TASKING_MACHINE',
        }, {
          label: 'Turning Machine',
          value: 'TURNING_MACHINE',
        },
      ]
    }),
  ];
}
