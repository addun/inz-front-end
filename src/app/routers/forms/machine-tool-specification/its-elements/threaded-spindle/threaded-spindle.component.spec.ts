import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThreadedSpindleComponent} from './threaded-spindle.component';

describe('ThreadedSpindleComponent', () => {
  let component: ThreadedSpindleComponent;
  let fixture: ComponentFixture<ThreadedSpindleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadedSpindleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadedSpindleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
