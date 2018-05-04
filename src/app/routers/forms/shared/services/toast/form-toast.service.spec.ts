import {inject, TestBed} from '@angular/core/testing';

import {FormToastService} from './form-toast.service';

describe('FormToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormToastService]
    });
  });

  it('should be created', inject([FormToastService], (service: FormToastService) => {
    expect(service).toBeTruthy();
  }));
});
