import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../core/api/api.service';
import {MachineToolRequirement} from '../../models/machine-tool-requirement';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MachineToolRequirementService {
  private serviceBaseUrl = 'machinery/';

  constructor(private apiService: ApiService) {
  }

  addMachineToolRequirement(machineToolRequirement: MachineToolRequirement): Observable<MachineToolRequirement> {
    return this.apiService.post(`${this.serviceBaseUrl}machine-tool-requirements/`, machineToolRequirement);
  }

  getMachineToolRequirement(machineToolRequirementId: number): Observable<MachineToolRequirement> {
    return this.apiService.get(`${this.serviceBaseUrl}machine-tool-requirements/${machineToolRequirementId}`);
  }

  updateMachineToolRequirement(machineToolRequirement: MachineToolRequirement): Observable<MachineToolRequirement> {
    return this.apiService.patch(`${this.serviceBaseUrl}machine-tool-requirements/${machineToolRequirement.id}/`, machineToolRequirement);
  }


}