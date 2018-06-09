import { TestBed, inject } from '@angular/core/testing';

import { FormNotificationService } from './form-notification.service';

describe('FormNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormNotificationService]
    });
  });

  it('should be created', inject([FormNotificationService], (service: FormNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
