import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayActionComponent } from './array-action.component';

describe('ArrayActionComponent', () => {
  let component: ArrayActionComponent;
  let fixture: ComponentFixture<ArrayActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
