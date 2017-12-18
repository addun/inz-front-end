import {Injectable} from '@angular/core';
import {MachineToolSpecification} from '../../../../shared/models/machine-tool-specification.model';

@Injectable()
export class MachineToolSpecificationService {
  machine_tool_specification: MachineToolSpecification = new MachineToolSpecification();

  toJSON() {
    return JSON.stringify(this.machine_tool_specification);
  }

  fromJSON(json: string) {
    this.machine_tool_specification = JSON.parse(json);
  }
}

