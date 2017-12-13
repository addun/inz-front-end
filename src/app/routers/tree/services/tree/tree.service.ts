import {Injectable} from '@angular/core';
import {ApiService} from '../../../../core/api/api.service';
import {Observable} from 'rxjs/Observable';
import {Directory} from '../../models/directory.model';
import {TreeStructure} from '../../models/tree-structure.model';
import {MachineToolRequirement} from '../../../forms/shared/models/machine-tool-requirement';

@Injectable()
export class TreeService {
  private serviceBaseUrl = 'tree/';

  constructor(private apiService: ApiService) {
  }

  getTreeStructure(): Observable<TreeStructure[]> {
    return this.apiService.get(`${this.serviceBaseUrl}structure/`);
  }

  getNodes(): Observable<Directory[]> {
    return this.apiService.get(`${this.serviceBaseUrl}nodes/`);
  }

  addNode(node: Directory): Observable<Directory> {
    return this.apiService.post(`${this.serviceBaseUrl}nodes/`, node);
  }

  patchNode(node: Directory): Observable<Directory> {
    return this.apiService.patch(`${this.serviceBaseUrl}nodes/${node.id}/`, node);
  }

  deleteNode(nodeId: number): Observable<Directory> {
    return this.apiService.delete(`${this.serviceBaseUrl}nodes/${nodeId}/`);
  }

  addMachineTooRequirementToTag(nodeId: number, machineToolRequirementId: number) {
    return this.apiService.post(`${this.serviceBaseUrl}node-machine-tool-requirement/`, {
      node: nodeId,
      machine_tool_requirement: machineToolRequirementId
    });
  }

  getMachineTooRequirementsByTag(tagId: number): Observable<MachineToolRequirement[]> {
    return this.apiService.get(`${this.serviceBaseUrl}machine-tool-requirement-in-node/${tagId}/`);
  }

}
