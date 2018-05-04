import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RectangularWorkTableFormComponent} from './rectangular-work-table-form.component';

describe('RectangularWorkTableFormComponent', () => {
  let component: RectangularWorkTableFormComponent;
  let fixture: ComponentFixture<RectangularWorkTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RectangularWorkTableFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangularWorkTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
