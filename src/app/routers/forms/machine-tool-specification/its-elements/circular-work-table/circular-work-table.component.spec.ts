import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CircularWorkTableComponent} from './circular-work-table.component';

describe('CircularWorkTableComponent', () => {
  let component: CircularWorkTableComponent;
  let fixture: ComponentFixture<CircularWorkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CircularWorkTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularWorkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
