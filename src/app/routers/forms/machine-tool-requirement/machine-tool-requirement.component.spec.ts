import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolRequirementComponent } from './machine-tool-requirement.component';

describe('MachineToolRequirementComponent', () => {
  let component: MachineToolRequirementComponent;
  let fixture: ComponentFixture<MachineToolRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
