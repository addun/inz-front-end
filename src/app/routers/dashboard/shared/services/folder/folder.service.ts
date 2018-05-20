import {Injectable} from '@angular/core';
import {FolderToCreate, FolderToRead, FolderToUpdate} from '../../models/folder.model';
import {ApiService} from '../../../../../core/api/api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  constructor(private apiService: ApiService) {
  }

  getFolderTree(): Observable<FolderToRead[]> {
    return this.apiService.get(`folders/`);
  }

  addFolder(folder: FolderToCreate): Observable<FolderToRead> {
    return this.apiService.post(`folders/`, folder);
  }

  updateFolder(folder: FolderToUpdate): Observable<FolderToRead> {
    return this.apiService.patch(`folders/${folder._id}`, folder);
  }

  removeFolder(folderId: string): Observable<FolderToRead> {
    return this.apiService.delete(`folders/${folderId}`);
  }
}
