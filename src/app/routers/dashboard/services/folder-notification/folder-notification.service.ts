import {Injectable} from '@angular/core';
import {NotificationService} from '../../../../core/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class FolderNotificationService {

  constructor(private notificationService: NotificationService) {
  }

  folderHasBeenCreate() {
    this.notificationService.success('Folder has been create');
  }

  folderHasBeenRemoved() {
    this.notificationService.success('Folder has been removed');
  }

  folderHasBeenEdited() {
    this.notificationService.success('Folder has been edited');
  }

  serverError() {
    this.notificationService.error('Server response error!');
  }
}
