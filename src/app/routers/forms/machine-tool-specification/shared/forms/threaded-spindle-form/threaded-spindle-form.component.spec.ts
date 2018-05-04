import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThreadedSpindleFormComponent} from './threaded-spindle-form.component';

describe('ThreadedSpindleFormComponent', () => {
  let component: ThreadedSpindleFormComponent;
  let fixture: ComponentFixture<ThreadedSpindleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadedSpindleFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadedSpindleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
