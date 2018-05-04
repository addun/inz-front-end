import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StraightSpindleComponent} from './straight-spindle.component';

describe('StraightSpindleComponent', () => {
  let component: StraightSpindleComponent;
  let fixture: ComponentFixture<StraightSpindleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StraightSpindleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightSpindleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
