import {Injectable} from '@angular/core';
import {MachineToolSpecification} from '../../../../shared/models/machine-tool-specification.model';
import {ApiService} from '../../../../../../core/api/api.service';

@Injectable()
export class MachineToolSpecificationService {

  constructor(private apiService: ApiService) {

  }

  addMachineToolSpecification(model: MachineToolSpecification) {
    return this.apiService.post(`enginery/asdfawef/`, {
      data: JSON.stringify(model)
    });
  }

  getMachineToolSpecification(id: number) {
    return this.apiService.get(`enginery/asdfawef/${id}/`);
  }

}

