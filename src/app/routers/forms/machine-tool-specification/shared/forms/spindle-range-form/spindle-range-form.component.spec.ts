import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpindleRangeFormComponent} from './spindle-range-form.component';

describe('SpindleRangeFormComponent', () => {
  let component: SpindleRangeFormComponent;
  let fixture: ComponentFixture<SpindleRangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpindleRangeFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindleRangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
