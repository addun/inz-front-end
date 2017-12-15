import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolSpecificationComponent } from './machine-tool-specification.component';

describe('MachineToolSpecificationComponent', () => {
  let component: MachineToolSpecificationComponent;
  let fixture: ComponentFixture<MachineToolSpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolSpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
