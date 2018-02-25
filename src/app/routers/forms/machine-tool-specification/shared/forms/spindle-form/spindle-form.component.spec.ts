import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpindleFormComponent } from './spindle-form.component';

describe('SpindleFormComponent', () => {
  let component: SpindleFormComponent;
  let fixture: ComponentFixture<SpindleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpindleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
