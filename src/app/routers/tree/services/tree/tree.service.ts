import {Injectable} from '@angular/core';
import {ApiService} from '../../../../core/api/api.service';
import {Observable} from 'rxjs/Observable';
import {Tree} from '../../models/tree.model';

@Injectable()
export class TreeService {

  constructor(private apiService: ApiService) {
  }

  getTreeChildren(parentId: number): Observable<Tree[]> {
    return this.apiService.get(`tree/nodes/${parentId}/children/`);
  }

  getRootTree(): Observable<Tree[]> {
    return this.apiService.get(`tree/nodes/0/children/`);
  }

  addTree(tree: Tree): Observable<Tree> {
    return this.apiService.post(`tree/nodes/`, tree);
  }

}
