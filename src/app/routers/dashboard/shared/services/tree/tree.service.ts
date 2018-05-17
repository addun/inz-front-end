import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Folder} from '../../models/folder.model';
import {StorageService} from '../../../../../core/storage/storage.service';

@Injectable()
export class TreeService {
  private selectedFolderSubject = new Subject<Folder>();
  private storageKey = 'nodes_state';
  private selectedFolderId = 'selected_folder_id';

  constructor(private storageService: StorageService) {
  }


  get selectedFolder(): Folder {
    return this.loadSelectedFolderFromMemory();
  }

  set selectedFolder(folder: Folder) {
    this.saveSelectedFolderInMemory(folder);
    this.selectedFolderSubject.next(folder);
  }

  listenSelectedFolder(): Observable<Folder> {
    return this.selectedFolderSubject.asObservable();
  }

  getSavedNodeState(nodeId: string) {
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

  private saveSelectedFolderInMemory(folder: Folder) {
    this.storageService.save(this.selectedFolderId, folder);
  }

  private loadSelectedFolderFromMemory(): Folder {
    return this.storageService.get(this.selectedFolderId);
  }

}
