import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeviceIdFormComponent} from './device-id-form.component';

describe('DeviceIdFormComponent', () => {
  let component: DeviceIdFormComponent;
  let fixture: ComponentFixture<DeviceIdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceIdFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
