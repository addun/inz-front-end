import {DynamicCheckboxModel, DynamicFormControlModel, DynamicSelectModel, DynamicTimePickerModel} from '@ng-dynamic-forms/core';
import {sensorForm} from './sensor.form';

export function toolSettingForm(): DynamicFormControlModel[] {
  return sensorForm().concat([

    new DynamicCheckboxModel({
      id: 'measuring_radius',
      label: 'Measuring radius',
    }),
    new DynamicCheckboxModel({
      id: 'measuring_length',
      label: 'Measuring length',
    }),
    new DynamicTimePickerModel({
      id: 'measure_time',
      label: 'Measure time',
    }),
    new DynamicSelectModel({
      id: 'probe_type',
      label: 'Probe type',
      options: [
        {
          label: 'NULLING',
          value: 'NULLING,',
        },
        {
          label: 'PROPORTIONAL',
          value: 'PROPORTIONAL'
        },
        {
          label: 'SWITCHING',
          value: 'SWITCHING'
        }
      ],
    }),
  ]);
}
