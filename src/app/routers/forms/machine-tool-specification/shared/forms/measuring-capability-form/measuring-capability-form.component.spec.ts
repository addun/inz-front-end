import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringCapabilityFormComponent } from './measuring-capability-form.component';

describe('MeasuringCapabilityFormComponent', () => {
  let component: MeasuringCapabilityFormComponent;
  let fixture: ComponentFixture<MeasuringCapabilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuringCapabilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringCapabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
