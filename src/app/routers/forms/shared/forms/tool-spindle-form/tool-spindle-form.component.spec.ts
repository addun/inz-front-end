import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSpindleFormComponent } from './tool-spindle-form.component';

describe('ToolSpindleFormComponent', () => {
  let component: ToolSpindleFormComponent;
  let fixture: ComponentFixture<ToolSpindleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolSpindleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolSpindleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
