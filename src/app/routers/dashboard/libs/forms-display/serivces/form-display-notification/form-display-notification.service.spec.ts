import { TestBed, inject } from '@angular/core/testing';

import { FormDisplayNotificationService } from './form-display-notification.service';

describe('FormDisplayNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormDisplayNotificationService]
    });
  });

  it('should be created', inject([FormDisplayNotificationService], (service: FormDisplayNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
