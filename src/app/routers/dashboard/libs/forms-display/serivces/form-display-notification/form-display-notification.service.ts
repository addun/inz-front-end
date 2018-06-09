import {Injectable} from '@angular/core';
import {NotificationService} from '../../../../../../core/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class FormDisplayNotificationService {

  constructor(private  notificationService: NotificationService) {
  }

  recordRemoved() {
    this.notificationService.success('Record has been removed');
  }

  errorWhileRemoving() {
    this.notificationService.error('Record has not been removed');
  }

  incorrectData() {
    this.notificationService.error('This formId does not existing', 'Incorrect Form');
  }

}
