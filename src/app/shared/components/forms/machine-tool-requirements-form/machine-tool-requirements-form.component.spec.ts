import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolRequirementsFormComponent } from './machine-tool-requirements-form.component';

describe('MachineToolRequirementsFormComponent', () => {
  let component: MachineToolRequirementsFormComponent;
  let fixture: ComponentFixture<MachineToolRequirementsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolRequirementsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolRequirementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
