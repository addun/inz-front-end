import {Injectable} from '@angular/core';
import {StorageService} from '../../../../../../core/storage/storage.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderTreeService {
  private selectedFolderSubject = new Subject<string>();
  private storageKey = 'nodes_state';
  private selectedFolderKey = 'selected_folder_id';

  constructor(private storageService: StorageService) {
  }


  get selectedFolder(): string {
    return this.loadSelectedFolderFromMemory();
  }

  set selectedFolder(folderId: string) {
    this.saveSelectedFolderInMemory(folderId);
    this.selectedFolderSubject.next(folderId);
  }

  onFolderSelect(): Observable<string> {
    return this.selectedFolderSubject.asObservable();
  }

  getSavedNodeState(nodeId: string): any | null {
    const nodesState = this.storageService.get(this.storageKey);
    if (!nodesState) {
      return null;
    } else {
      return nodesState[nodeId];
    }
  }

  saveNodeState(nodeId: string, state: any): void {
    let nodesState = this.storageService.get(this.storageKey);
    if (!nodesState) {
      nodesState = {};
    }
    nodesState[nodeId] = state;
    this.storageService.save(this.storageKey, nodesState);
  }

  private saveSelectedFolderInMemory(folder: string) {
    this.storageService.save(this.selectedFolderKey, folder);
  }

  private loadSelectedFolderFromMemory(): string {
    return this.storageService.get(this.selectedFolderKey);
  }
}
