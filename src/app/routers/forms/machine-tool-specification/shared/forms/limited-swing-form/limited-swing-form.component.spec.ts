import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedSwingFormComponent } from './limited-swing-form.component';

describe('LimitedSwingFormComponent', () => {
  let component: LimitedSwingFormComponent;
  let fixture: ComponentFixture<LimitedSwingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedSwingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedSwingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
