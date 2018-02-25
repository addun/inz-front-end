import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightSpindleFormComponent } from './straight-spindle-form.component';

describe('StraightSpindleFormComponent', () => {
  let component: StraightSpindleFormComponent;
  let fixture: ComponentFixture<StraightSpindleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraightSpindleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightSpindleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
