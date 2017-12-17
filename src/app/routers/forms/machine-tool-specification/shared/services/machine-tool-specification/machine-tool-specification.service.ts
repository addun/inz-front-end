import {Injectable} from '@angular/core';
import {deviceIdForm} from '../../../../shared/forms/device-id.form';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {installationForm} from '../../../../shared/forms/installation.form';
import {machiningCapabilityForm} from '../../../../shared/forms/machining-capability.form';
import {measuringCapabilityForm} from '../../../../shared/forms/measuring-capability.form';
import {machineToolSpecificationForm} from '../../../../shared/forms/machine-tool-specification.form';
import {locatorForm} from '../../../../shared/forms/locator.form';
import {MachineToolElementsService} from '../../../machine-tool-elements/shared/services/machine-tool-elements/machine-tool-elements.service';

@Injectable()
export class MachineToolSpecificationService {
  machineToolSpecification = machineToolSpecificationForm();
  deviceIdModel = deviceIdForm();
  installationModel = installationForm();
  machiningCapabilitiesModel = this.generateClearArray(machiningCapabilityForm);
  measuringCapabilityModel = measuringCapabilityForm();
  locationModel = locatorForm();

  constructor(private  dynamicFormService: DynamicFormService,
              private machineToolElementsService: MachineToolElementsService) {
  }

  getData() {
    const machineToolSpecification = this.getValues(this.machineToolSpecification);

    machineToolSpecification['device_id'] = this.getValues(this.deviceIdModel);
    machineToolSpecification['machining_capabilities'] = this.getValues(this.machiningCapabilitiesModel);
    machineToolSpecification['measuring_capability'] = this.getValues(this.measuringCapabilityModel);
    machineToolSpecification['location'] = this.getValues(this.locationModel);
    machineToolSpecification['installation'] = this.getValues(this.installationModel);
    machineToolSpecification['its_elements'] = this.machineToolElementsService.getData();

    return machineToolSpecification;
  }

  private getValues(model: DynamicFormControlModel[]): any {
    const value = this.dynamicFormService.createFormGroup(model).value;
    return value['array'] ? value['array'] : value;
  }

  private generateClearArray(groupFactory: () => DynamicFormControlModel[]) {
    return [
      new DynamicFormArrayModel({
        id: 'array',
        initialCount: 0,
        groupFactory: groupFactory
      })
    ];
  }

}

