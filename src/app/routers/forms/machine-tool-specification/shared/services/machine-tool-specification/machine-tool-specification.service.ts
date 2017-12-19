import {Injectable} from '@angular/core';
import {MachineToolSpecification} from '../../../../shared/models/machine-tool-specification.model';

@Injectable()
export class MachineToolSpecificationService {
  machine_tool_specification: MachineToolSpecification = new MachineToolSpecification();
    /*<any>  {
    'description': null,
    'machine_class': null,
    'its_elements': [
      {
        'name': null,
        'description': null,
        'weight': null
      }
    ]
  };*/


}

