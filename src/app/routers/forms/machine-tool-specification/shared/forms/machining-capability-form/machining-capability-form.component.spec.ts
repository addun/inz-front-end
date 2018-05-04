import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MachiningCapabilityFormComponent} from './machining-capability-form.component';

describe('MachiningCapabilityFormComponent', () => {
  let component: MachiningCapabilityFormComponent;
  let fixture: ComponentFixture<MachiningCapabilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MachiningCapabilityFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachiningCapabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
