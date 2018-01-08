import {Injectable} from '@angular/core';
import {ApiService} from '../../../../core/api/api.service';
import {Observable} from 'rxjs/Observable';
import {Directory} from '../../models/directory.model';
import {TreeStructure} from '../../models/tree-structure.model';
import {map} from 'rxjs/operators';

@Injectable()
export class TreeService {
  private serviceBaseUrl = 'tree/';

  constructor(private apiService: ApiService) {
  }

  getTreeStructure(): Observable<TreeStructure[]> {
    return this.apiService.get(`${this.serviceBaseUrl}structure/`);
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

  addMachineToolSpecificationToNode(nodeId: number, machineToolSpecification: number) {
    return this.apiService.post(`${this.serviceBaseUrl}machine-tool-specification-in-node/`, {
      node: nodeId,
      machine_tool_requirement: machineToolSpecification
    });
  }

  getMachineToolSpecificationsInNode(nodeId: number) {
    return this.apiService.get(`${this.serviceBaseUrl}tesetset/${nodeId}/`)
      .pipe(
        map(objects => {
          return objects.map(item => {
            item.data = JSON.parse(item.data);
            return item;
          });
        })
      );
  }

}
