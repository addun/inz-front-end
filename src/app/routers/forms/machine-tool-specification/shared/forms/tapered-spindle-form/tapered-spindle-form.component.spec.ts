import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaperedSpindleFormComponent } from './tapered-spindle-form.component';

describe('TaperedSpindleFormComponent', () => {
  let component: TaperedSpindleFormComponent;
  let fixture: ComponentFixture<TaperedSpindleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaperedSpindleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaperedSpindleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
