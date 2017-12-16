import {Injectable} from '@angular/core';
import {deviceIdForm} from '../../../../shared/forms/device-id.form';
import {DynamicFormArrayModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {installationForm} from '../../../../shared/forms/installation.form';
import {machiningCapabilityForm} from '../../../../shared/forms/machining-capability.form';
import {measuringCapabilityForm} from '../../../../shared/forms/measuring-capability.form';

@Injectable()
export class MachineToolSpecificationService {
  deviceIdModel = deviceIdForm();
  installationModel = installationForm();
  machiningCapabilitiesModel = [
    new DynamicFormArrayModel({
      id: 'array',
      initialCount: 1,
      groupFactory: machiningCapabilityForm
    })
  ];
  measuringCapabilityModel = measuringCapabilityForm();
  locationModel = installationForm();

  constructor(private  dynamicFormService: DynamicFormService) {
  }

  generateData() {
    return {
      device_id: this.dynamicFormService.createFormGroup(this.machiningCapabilitiesModel).value['array']
    };
  }


}
