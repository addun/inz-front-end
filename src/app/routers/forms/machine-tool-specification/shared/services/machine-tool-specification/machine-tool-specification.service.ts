import {Injectable} from '@angular/core';
import {deviceIdForm} from '../../../../shared/forms/device-id.form';
import {DynamicFormArrayModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {installationForm} from '../../../../shared/forms/installation.form';
import {machiningCapabilityForm} from '../../../../shared/forms/machining-capability.form';
import {measuringCapabilityForm} from '../../../../shared/forms/measuring-capability.form';
import {machineToolSpecificationForm} from '../../../../shared/forms/machine-tool-specification.form';
import {locatorForm} from '../../../../shared/forms/locator.form';

@Injectable()
export class MachineToolSpecificationService {
  machineToolSpecification = machineToolSpecificationForm();
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
  locationModel = locatorForm();

  constructor(private  dynamicFormService: DynamicFormService) {
  }

  generateData() {
    return {
      device_id: this.dynamicFormService.createFormGroup(this.machiningCapabilitiesModel).value['array']
    };
  }


}
