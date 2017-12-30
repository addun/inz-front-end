import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHrefComponent } from './form-href.component';

describe('FormHrefComponent', () => {
  let component: FormHrefComponent;
  let fixture: ComponentFixture<FormHrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
