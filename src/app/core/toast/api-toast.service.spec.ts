import {inject, TestBed} from '@angular/core/testing';

import {ApiToastService} from './api-toast.service';

describe('ApiToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiToastService]
    });
  });

  it('should be created', inject([ApiToastService], (service: ApiToastService) => {
    expect(service).toBeTruthy();
  }));
});
