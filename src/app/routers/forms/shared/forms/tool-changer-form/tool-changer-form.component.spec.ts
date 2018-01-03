import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolChangerFormComponent } from './tool-changer-form.component';

describe('ToolChangerFormComponent', () => {
  let component: ToolChangerFormComponent;
  let fixture: ComponentFixture<ToolChangerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolChangerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolChangerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
