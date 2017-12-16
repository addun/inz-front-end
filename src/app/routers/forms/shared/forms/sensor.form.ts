import {DynamicFormControlModel, DynamicFormGroupModel} from '@ng-dynamic-forms/core';
import {elementCapabilityForm} from './element-capability.form';
import {deviceIdForm} from './device-id.form';

export function sensorForm(): DynamicFormControlModel[] {
  return elementCapabilityForm().concat([

    new DynamicFormGroupModel({
      id: 'device_id',
      label: 'Device id',
      group: deviceIdForm()
    }),
  ]);
}
