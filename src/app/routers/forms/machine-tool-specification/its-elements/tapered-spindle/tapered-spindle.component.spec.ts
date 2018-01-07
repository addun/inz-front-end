import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaperedSpindleComponent } from './tapered-spindle.component';

describe('TaperedSpindleComponent', () => {
  let component: TaperedSpindleComponent;
  let fixture: ComponentFixture<TaperedSpindleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaperedSpindleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaperedSpindleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
