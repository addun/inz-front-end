import { TestBed, inject } from '@angular/core/testing';

import { MachineToolSpecificationService } from './machine-tool-specification.service';

describe('MachineToolSpecificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachineToolSpecificationService]
    });
  });

  it('should be created', inject([MachineToolSpecificationService], (service: MachineToolSpecificationService) => {
    expect(service).toBeTruthy();
  }));
});
