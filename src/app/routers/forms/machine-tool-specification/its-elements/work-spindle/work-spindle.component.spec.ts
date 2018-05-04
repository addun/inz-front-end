import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkSpindleComponent} from './work-spindle.component';

describe('WorkSpindleComponent', () => {
  let component: WorkSpindleComponent;
  let fixture: ComponentFixture<WorkSpindleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkSpindleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpindleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
