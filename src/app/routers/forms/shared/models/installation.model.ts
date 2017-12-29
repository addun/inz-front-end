import {FormControl, FormGroup, Validators} from '@angular/forms';

export class Installation {
  weight: number = null;
  size: MachineSize = new MachineSize();
  electrical: Electrical = new Electrical();
  hydraulics: Hydraulics = new Hydraulics();
  air_pressure_requirement?: number = null;
  water_flow_rate?: number = null;

  constructor(installation?) {
    Object.assign(this, installation);
  }

  public static getFormControls(loadModel?: Installation) {
    if (!loadModel) {
      loadModel = new Installation();
    }

    return {
      weight: new FormControl(loadModel.weight, Validators.required),
      air_pressure_requirement: new FormControl(loadModel.air_pressure_requirement),
      water_flow_rate: new FormControl(loadModel.water_flow_rate),

      size: new FormGroup(MachineSize.getFormControls(loadModel.size)),
      electrical: new FormGroup(Electrical.getFormControls(loadModel.electrical)),
      hydraulics: new FormGroup(Hydraulics.getFormControls(loadModel.hydraulics)),
    };
  }
}


class MachineSize {
  machine_length: number = null;
  machine_width: number = null;
  machine_height: number = null;

  constructor(machineSize?) {
    Object.assign(this, machineSize);
  }

  public static getFormControls(loadModel?: MachineSize) {
    if (!loadModel) {
      loadModel = new MachineSize();
    }

    return {
      machine_length: new FormControl(loadModel.machine_length, Validators.required),
      machine_width: new FormControl(loadModel.machine_width, Validators.required),
      machine_height: new FormControl(loadModel.machine_height, Validators.required),
    };
  }
}

class Electrical {
  electric_phase: number = null;
  electric_power: number = null;
  electrical_current: number = null;
  electrical_frequency: string = null;
  electrical_grounding: string = null;
  electrical_voltage: number = null;

  constructor(electrical?) {
    Object.assign(this, electrical);
  }

  public static getFormControls(loadModel?: Electrical) {
    if (!loadModel) {
      loadModel = new Electrical();
    }

    return {
      electric_phase: new FormControl(loadModel.electric_phase, Validators.required),
      electric_power: new FormControl(loadModel.electric_power, Validators.required),
      electrical_current: new FormControl(loadModel.electrical_current, Validators.required),
      electrical_frequency: new FormControl(loadModel.electrical_frequency, Validators.required),
      electrical_grounding: new FormControl(loadModel.electrical_grounding, Validators.required),
      electrical_voltage: new FormControl(loadModel.electrical_voltage, Validators.required),
    };
  }
}

class Hydraulics {
  type_of_hydraulic_oil: string = null;
  pump_outlet_pressure: number = null;
  capacity_of_hydraulics_tank: number = null;

  constructor(installation?) {
    Object.assign(this, installation || {});
  }

  public static getFormControls(loadModel?: Hydraulics) {
    if (!loadModel) {
      loadModel = new Hydraulics();
    }

    return {
      type_of_hydraulic_oil: new FormControl(loadModel.type_of_hydraulic_oil, Validators.required),
      pump_outlet_pressure: new FormControl(loadModel.pump_outlet_pressure, Validators.required),
      capacity_of_hydraulics_tank: new FormControl(loadModel.capacity_of_hydraulics_tank, Validators.required),
    };
  }
}
