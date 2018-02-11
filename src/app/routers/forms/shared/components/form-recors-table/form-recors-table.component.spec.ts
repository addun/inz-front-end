import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecorsTableComponent } from './form-recors-table.component';

describe('FormRecorsTableComponent', () => {
  let component: FormRecorsTableComponent;
  let fixture: ComponentFixture<FormRecorsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecorsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
