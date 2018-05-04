import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolHandlingUnitFormComponent} from './tool-handling-unit-form.component';

describe('ToolHandlingUnitFormComponent', () => {
  let component: ToolHandlingUnitFormComponent;
  let fixture: ComponentFixture<ToolHandlingUnitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolHandlingUnitFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolHandlingUnitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
