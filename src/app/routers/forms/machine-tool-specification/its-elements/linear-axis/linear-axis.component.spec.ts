import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearAxisComponent } from './linear-axis.component';

describe('LinearAxisComponent', () => {
  let component: LinearAxisComponent;
  let fixture: ComponentFixture<LinearAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
