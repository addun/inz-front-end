import {inject, TestBed} from '@angular/core/testing';
import {MachineToolRequirementService} from './machine-tool-requirement.service';


describe('MachineToolRequirementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachineToolRequirementService]
    });
  });

  it('should be created', inject([MachineToolRequirementService], (service: MachineToolRequirementService) => {
    expect(service).toBeTruthy();
  }));
});
