import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThreadedSpindleRangeComponent} from './threaded-spindle-range.component';

describe('ThreadedSpindleRangeComponent', () => {
  let component: ThreadedSpindleRangeComponent;
  let fixture: ComponentFixture<ThreadedSpindleRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadedSpindleRangeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadedSpindleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
