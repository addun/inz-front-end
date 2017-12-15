import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringCapabilityComponent } from './measuring-capability.component';

describe('MeasuringCapabilityComponent', () => {
  let component: MeasuringCapabilityComponent;
  let fixture: ComponentFixture<MeasuringCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuringCapabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
