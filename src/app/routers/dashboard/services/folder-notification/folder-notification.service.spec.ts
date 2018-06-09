import { TestBed, inject } from '@angular/core/testing';

import { FolderNotificationService } from './folder-notification.service';

describe('FolderNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolderNotificationService]
    });
  });

  it('should be created', inject([FolderNotificationService], (service: FolderNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
