import {Injectable} from '@angular/core';
import {FolderDTO} from '../../dto/folder.dto';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class TreeService {
  private currentFolder: FolderDTO;
  private selectedFolderSubject = new Subject<FolderDTO>();
  private collapseFolderSubject = new Subject<FolderDTO>();

  constructor() {
  }

  public get selectedFolder(): FolderDTO {
    return this.currentFolder;
  }

  setFolderAsSelected(folder: FolderDTO) {
    this.currentFolder = folder;
    this.selectedFolderSubject.next(folder);
  }

  lisenSelectedFolder(): Observable<FolderDTO> {
    return this.selectedFolderSubject.asObservable();
  }

  lisenCollapseFolder(): Observable<FolderDTO> {
    return this.collapseFolderSubject.asObservable();
  }

  collapseEvent(folder: FolderDTO) {
    this.collapseFolderSubject.next(folder);
  }


}
