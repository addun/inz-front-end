import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIdControlsComponent } from './device-id-controls.component';

describe('DeviceIdControlsComponent', () => {
  let component: DeviceIdControlsComponent;
  let fixture: ComponentFixture<DeviceIdControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIdControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIdControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
