import {inject, TestBed} from '@angular/core/testing';

import {MachineToolSpecificationFormService} from './machine-tool-specification-form.service';

describe('MachineToolSpecificationFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachineToolSpecificationFormService]
    });
  });

  it('should be created', inject([MachineToolSpecificationFormService], (service: MachineToolSpecificationFormService) => {
    expect(service).toBeTruthy();
  }));
});
