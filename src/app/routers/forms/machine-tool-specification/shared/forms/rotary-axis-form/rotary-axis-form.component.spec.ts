import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RotaryAxisFormComponent} from './rotary-axis-form.component';

describe('RotaryAxisFormComponent', () => {
  let component: RotaryAxisFormComponent;
  let fixture: ComponentFixture<RotaryAxisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RotaryAxisFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaryAxisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
