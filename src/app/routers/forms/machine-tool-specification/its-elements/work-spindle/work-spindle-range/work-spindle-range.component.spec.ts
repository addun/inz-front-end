import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkSpindleRangeComponent} from './work-spindle-range.component';

describe('WorkSpindleRangeComponent', () => {
  let component: WorkSpindleRangeComponent;
  let fixture: ComponentFixture<WorkSpindleRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkSpindleRangeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpindleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
