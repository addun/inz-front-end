import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachiningCapabilityComponent } from './machining-capability.component';

describe('MachiningCapabilityComponent', () => {
  let component: MachiningCapabilityComponent;
  let fixture: ComponentFixture<MachiningCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachiningCapabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachiningCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
