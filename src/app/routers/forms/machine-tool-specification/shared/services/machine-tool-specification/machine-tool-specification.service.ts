import {Injectable} from '@angular/core';
import {deviceIdForm} from '../../../../shared/forms/device-id.form';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {installationForm} from '../../../../shared/forms/installation.form';
import {machiningCapabilityForm} from '../../../../shared/forms/machining-capability.form';
import {measuringCapabilityForm} from '../../../../shared/forms/measuring-capability.form';
import {machineToolSpecificationForm} from '../../../../shared/forms/machine-tool-specification.form';
import {locatorForm} from '../../../../shared/forms/locator.form';
import {barFeederForm} from '../../../../shared/forms/bar-feeder.form';
import {colletForm} from '../../../../shared/forms/collet.form';

@Injectable()
export class MachineToolSpecificationService {
  machineToolSpecification = machineToolSpecificationForm();
  deviceIdModel = deviceIdForm();
  installationModel = installationForm();
  machiningCapabilitiesModel = [
    new DynamicFormArrayModel({
      id: 'array',
      initialCount: 0,
      groupFactory: machiningCapabilityForm
    })
  ];
  measuringCapabilityModel = measuringCapabilityForm();
  locationModel = locatorForm();
  barFeederModel: DynamicFormControlModel[] = barFeederForm();
  colletModel: DynamicFormControlModel[] = colletForm();

  constructor(private  dynamicFormService: DynamicFormService) {
  }

  generateData() {
    return {
      device_id: this.dynamicFormService.createFormGroup(this.machiningCapabilitiesModel).value['array']
    };
  }


}
