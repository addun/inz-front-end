import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLayoutComponent } from './forms-layout.component';

describe('FormsLayoutComponent', () => {
  let component: FormsLayoutComponent;
  let fixture: ComponentFixture<FormsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
