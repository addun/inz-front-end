import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FolderToRead} from '../../models/folder.model';
import {StorageService} from '../../../../../core/storage/storage.service';

@Injectable()
export class TreeService {
  private selectedFolderSubject = new Subject<FolderToRead>();
  private storageKey = 'nodes_state';
  private selectedFolderId = 'selected_folder_id';

  constructor(private storageService: StorageService) {
  }


  get selectedFolder(): FolderToRead {
    return this.loadSelectedFolderFromMemory();
  }

  set selectedFolder(folder: FolderToRead) {
    this.saveSelectedFolderInMemory(folder);
    this.selectedFolderSubject.next(folder);
  }

  listenSelectedFolder(): Observable<FolderToRead> {
    return this.selectedFolderSubject.asObservable();
  }

  getNodeState(nodeId: string) {
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

  private saveSelectedFolderInMemory(folderToRead: FolderToRead) {
    this.storageService.save(this.selectedFolderId, folderToRead);
  }

  private loadSelectedFolderFromMemory(): FolderToRead {
    return this.storageService.get(this.selectedFolderId);
  }

}
