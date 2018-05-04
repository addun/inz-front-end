import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RectangularWorkTableComponent} from './rectangular-work-table.component';

describe('RectangularWorkTableComponent', () => {
  let component: RectangularWorkTableComponent;
  let fixture: ComponentFixture<RectangularWorkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RectangularWorkTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangularWorkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
