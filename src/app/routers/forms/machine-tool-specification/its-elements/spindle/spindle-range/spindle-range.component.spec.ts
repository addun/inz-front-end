import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpindleRangeComponent} from './spindle-range.component';

describe('SpindleRangeComponent', () => {
  let component: SpindleRangeComponent;
  let fixture: ComponentFixture<SpindleRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpindleRangeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
