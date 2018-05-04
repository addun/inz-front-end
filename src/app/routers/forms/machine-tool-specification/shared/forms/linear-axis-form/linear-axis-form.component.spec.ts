import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LinearAxisFormComponent} from './linear-axis-form.component';

describe('LinearAxisFormComponent', () => {
  let component: LinearAxisFormComponent;
  let fixture: ComponentFixture<LinearAxisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinearAxisFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearAxisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
