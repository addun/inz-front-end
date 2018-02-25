import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpindleFormComponent } from './work-spindle-form.component';

describe('WorkSpindleFormComponent', () => {
  let component: WorkSpindleFormComponent;
  let fixture: ComponentFixture<WorkSpindleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSpindleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpindleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
