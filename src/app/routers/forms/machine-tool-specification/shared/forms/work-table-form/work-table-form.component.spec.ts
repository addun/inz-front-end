import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkTableFormComponent} from './work-table-form.component';

describe('WorkTableFormComponent', () => {
  let component: WorkTableFormComponent;
  let fixture: ComponentFixture<WorkTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTableFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
