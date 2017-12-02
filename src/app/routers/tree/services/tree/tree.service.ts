import {Injectable} from '@angular/core';
import {ApiService} from '../../../../core/api/api.service';
import {Observable} from 'rxjs/Observable';
import {Directory} from '../../models/directory.model';
import {Tag} from '../../models/tag.model';
import {TreeStructure} from '../../models/tree-structure.model';
import {map} from 'rxjs/operators';

@Injectable()
export class TreeService {
  private serviceBaseUrl = 'tree/';

  constructor(private apiService: ApiService) {
  }

  getTreeStructure(): Observable<TreeStructure[]> {
    return this.apiService.get(`${this.serviceBaseUrl}structure/`)
      .pipe(
        map((structure: TreeStructure[]) => this.concatTagsToChildren(structure))
      );
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

  patchTag(tag: Tag): Observable<Tag> {
    return this.apiService.patch(`${this.serviceBaseUrl}tags/${tag.id}/`, tag);
  }

  addTag(tag: Tag): Observable<Tag> {
    return this.apiService.post(`${this.serviceBaseUrl}tags/`, tag);
  }

  deleteTag(tagId: number): Observable<Tag> {
    return this.apiService.delete(`${this.serviceBaseUrl}tags/${tagId}/`);
  }


  private concatTagsToChildren(structure: TreeStructure[]) {
    return structure.map(element => {
      if (element.children) {
        element.children = this.concatTagsToChildren(element.children);
      }
      element.children.push(...element.tags);
      return element;
    });
  }

}
