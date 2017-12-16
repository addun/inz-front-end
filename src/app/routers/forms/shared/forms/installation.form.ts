import {DynamicFormControlModel, DynamicFormGroupModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export function installationForm(): DynamicFormControlModel[] {
  return [

    new DynamicInputModel({
      id: 'weight',
      label: 'Weight',
      required: true
    }),


    new DynamicInputModel({
      id: 'air_pressure_requirement',
      label: 'Air pressure requirement',
    }),


    new DynamicInputModel({
      id: 'water_flow_rate',
      label: 'Water flow rate',
    }),

    new DynamicFormGroupModel({
      id: 'machine_size',
      legend: 'Size',
      group: [
        new DynamicInputModel({
          id: 'machine_length',
          label: 'Machine length',
          required: true
        }),
        new DynamicInputModel({
          id: 'machine_width',
          label: 'Machine width',
          required: true
        }),
        new DynamicInputModel({
          id: 'machine_height',
          label: 'Machine height',
          required: true
        }),
      ]
    }),

    new DynamicFormGroupModel({
      id: 'electrical;',
      legend: 'Electrical',
      group: [
        new DynamicInputModel({
          id: 'electric_phase',
          label: 'Electric Phase',
          required: true
        }),
        new DynamicInputModel({
          id: 'electric_power',
          label: 'Electric power',
          required: true
        }),
        new DynamicInputModel({
          id: 'electrical_current',
          label: 'Electrical current',
          required: true
        }),
        new DynamicInputModel({
          id: 'electrical_frequency',
          label: 'Electrical frequency',
          required: true
        }),
        new DynamicInputModel({
          id: 'electrical_grounding',
          label: 'Electrical grounding',
          required: true
        }),
        new DynamicInputModel({
          id: 'electrical_voltage',
          label: 'Electrical woltage',
          required: true
        }),
      ]
    }),


    new DynamicFormGroupModel({
      id: 'hydraulics',
      legend: 'Hydraulics',
      group: [
        new DynamicInputModel({
          id: 'type_of_hydraulic_oil',
          label: 'Type of hydraulic oil',
        }),
        new DynamicInputModel({
          id: 'pump_outlet_pressure',
          label: 'Pump outlet pressure',
        }),
        new DynamicInputModel({
          id: 'capacity_of_hydraulics_tank',
          label: 'Capacity of hydraulics tank',
        }),
      ]
    }),

  ];
}
