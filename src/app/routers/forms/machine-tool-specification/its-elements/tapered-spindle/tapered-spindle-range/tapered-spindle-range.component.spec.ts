import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaperedSpindleRangeComponent } from './tapered-spindle-range.component';

describe('TaperedSpindleRangeComponent', () => {
  let component: TaperedSpindleRangeComponent;
  let fixture: ComponentFixture<TaperedSpindleRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaperedSpindleRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaperedSpindleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
