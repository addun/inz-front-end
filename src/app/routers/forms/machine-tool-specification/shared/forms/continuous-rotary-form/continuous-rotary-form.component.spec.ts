import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContinuousRotaryFormComponent} from './continuous-rotary-form.component';

describe('ContinuousRotaryFormComponent', () => {
  let component: ContinuousRotaryFormComponent;
  let fixture: ComponentFixture<ContinuousRotaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContinuousRotaryFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousRotaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
