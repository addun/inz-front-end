import { TestBed, inject } from '@angular/core/testing';

import { MachineToolElementsService } from './machine-tool-elements.service';

describe('MachineToolElementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachineToolElementsService]
    });
  });

  it('should be created', inject([MachineToolElementsService], (service: MachineToolElementsService) => {
    expect(service).toBeTruthy();
  }));
});
