import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolAxisFormComponent } from './machine-tool-axis-form.component';

describe('MachineToolAxisFormComponent', () => {
  let component: MachineToolAxisFormComponent;
  let fixture: ComponentFixture<MachineToolAxisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolAxisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolAxisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
