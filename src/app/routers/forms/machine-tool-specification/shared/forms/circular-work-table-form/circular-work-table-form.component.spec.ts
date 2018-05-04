import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CircularWorkTableFormComponent} from './circular-work-table-form.component';

describe('CircularWorkTableFormComponent', () => {
  let component: CircularWorkTableFormComponent;
  let fixture: ComponentFixture<CircularWorkTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CircularWorkTableFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularWorkTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
