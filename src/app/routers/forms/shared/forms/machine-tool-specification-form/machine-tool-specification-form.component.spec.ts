import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolSpecificationFormComponent } from './machine-tool-specification-form.component';

describe('MachineToolSpecificationFormComponent', () => {
  let component: MachineToolSpecificationFormComponent;
  let fixture: ComponentFixture<MachineToolSpecificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolSpecificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolSpecificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
