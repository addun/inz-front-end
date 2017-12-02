import { TestBed, inject } from '@angular/core/testing';

import { TreeToastService } from './tree-toast.service';

describe('TreeToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeToastService]
    });
  });

  it('should be created', inject([TreeToastService], (service: TreeToastService) => {
    expect(service).toBeTruthy();
  }));
});
