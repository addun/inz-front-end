import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolAssemblyFormComponent} from './tool-assembly-form.component';

describe('ToolAssemblyFormComponent', () => {
  let component: ToolAssemblyFormComponent;
  let fixture: ComponentFixture<ToolAssemblyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolAssemblyFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolAssemblyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
