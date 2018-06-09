import {Injectable} from '@angular/core';
import {NotificationService} from '../../../../core/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class FormNotificationService {
  constructor(private notificationService: NotificationService) {
  }

  recordHasBeenSaved() {
    this.notificationService.success('Record has been saved');
  }

  formHasBeenSaved() {
    this.notificationService.success('Form has been saved');
  }

  formExist() {
    this.notificationService.error('This formId already exist! You can not save it!', 'Form exist');
  }
}
