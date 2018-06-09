import {Injectable} from '@angular/core';
import {NotificationService} from '../../../../../core/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class FormToastService {

  constructor(private notificationService: NotificationService) {
  }

  addedSuccess() {
    this.notificationService.success('Saved');
  }

  updateSuccess() {
    this.notificationService.success('Updated');
  }

  errorInRequest() {
    this.notificationService.error('Invalid request!');
  }

}
