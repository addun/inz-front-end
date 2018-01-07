import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightSpindleRangeComponent } from './straight-spindle-range.component';

describe('StraightSpindleRangeComponent', () => {
  let component: StraightSpindleRangeComponent;
  let fixture: ComponentFixture<StraightSpindleRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraightSpindleRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightSpindleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
