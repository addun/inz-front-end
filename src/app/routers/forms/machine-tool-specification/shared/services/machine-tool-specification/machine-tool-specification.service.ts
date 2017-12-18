import {Injectable} from '@angular/core';
import {MachineToolSpecification} from '../../../../shared/models/machine-tool-specification.model';

@Injectable()
export class MachineToolSpecificationService {
  machine_tool_specification: MachineToolSpecification = <any>{
    description: 'xvxcv',
    machine_class: 'MACHINING_CENTRE',
    'device_id': {
      'id': 'wert',
      'model_name': 'ytgubhnj',
      'serial_number': 'yuhnijmk',
      'manufacturer': 'yuhijmk',
      'date_manufactured': null,
    },
    'machining_capabilities': [
      {
        'capability': 'GUNDRILL_CAPABILITY',
        'machining_accuracy': 'sdfsdf',
        'description': 'sdf',
        'machining_size': {
          'description': 'sdf',
          'x': 'asdf',
          'y': 'sdfs',
          'z': 'dfsdf'
        }
      },
      {
        'capability': 'GUNDRILL_CAPABILITY',
        'machining_accuracy': 'sdfs',
        'description': 'dfsd',
        'machining_size': {
          'description': 'fsd',
          'x': 'fsdf',
          'y': 'sdf',
          'z': 'sdf'
        }
      }
    ],
    'its_elements': [
      {
        'name': 'asdfghjk',
        'description': 'Jakiś opiś :)',
        'weight': null
      },
      {
        'name': 'asdrftgyhui',
        'description': null,
        'weight': null
      }
    ]
  };


}

