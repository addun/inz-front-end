import {Injectable} from '@angular/core';
import {MachineToolSpecification} from '../../models/machine-tool-specification.model';
import {ApiService} from '../../../../../../core/api/api.service';
import {map} from 'rxjs/operators';

@Injectable()
export class MachineToolSpecificationService {

  constructor(private apiService: ApiService) {
  }


  addMachineToolSpecification(model: MachineToolSpecification) {
    return this.apiService.post(`enginery/asdfawef/`, {
      data: JSON.stringify(model)
    }).pipe(
      map(item => {
        item.data = JSON.parse(item.data);
        return item;
      })
    );
  }

  updateMachineToolSpecification(model) {
    return this.apiService.put(`enginery/asdfawef/${model.id}/`, {
      data: JSON.stringify(model.data)
    }).pipe(
      map(item => {
        item.data = JSON.parse(item.data);
        return item;
      })
    );
  }

  removeMachineToolSpecification(id: number) {
    return this.apiService.delete(`enginery/asdfawef/${id}/`);
  }

}

