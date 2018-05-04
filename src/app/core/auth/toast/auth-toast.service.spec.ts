import {inject, TestBed} from '@angular/core/testing';

import {AuthToastService} from './auth-toast.service';

describe('AuthToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthToastService]
    });
  });

  it('should be created', inject([AuthToastService], (service: AuthToastService) => {
    expect(service).toBeTruthy();
  }));
});
