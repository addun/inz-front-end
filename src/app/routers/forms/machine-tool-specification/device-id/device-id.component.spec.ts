import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIdComponent } from './device-id.component';

describe('DeviceIdComponent', () => {
  let component: DeviceIdComponent;
  let fixture: ComponentFixture<DeviceIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
