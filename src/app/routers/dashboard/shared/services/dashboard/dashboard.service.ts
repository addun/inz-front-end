import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../core/api/api.service';
import {Observable} from 'rxjs/Observable';
import {FolderDTO} from '../../../../../shared/models/folder.model';

@Injectable()
export class DashboardService {

  constructor(private apiService: ApiService) {
  }

  getFolderTree(): Observable<FolderDTO[]> {
    return this.apiService.get(`folders/`);
  }

  addFolder(folder: FolderDTO): Observable<FolderDTO> {
    return this.apiService.post(`folders/`, folder);
  }

  updateFolder(folder: FolderDTO): Observable<FolderDTO> {
    return this.apiService.patch(`folders/${folder._id}`, folder);
  }

  removeFolder(folderId: string): Observable<FolderDTO> {
    return this.apiService.delete(`folders/${folderId}`);
  }

}
