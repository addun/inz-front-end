import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousRotaryComponent } from './continuous-rotary.component';

describe('ContinuousRotaryComponent', () => {
  let component: ContinuousRotaryComponent;
  let fixture: ComponentFixture<ContinuousRotaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuousRotaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousRotaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
