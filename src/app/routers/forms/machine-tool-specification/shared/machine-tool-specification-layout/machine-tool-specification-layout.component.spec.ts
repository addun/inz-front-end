import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MachineToolSpecificationLayoutComponent} from './machine-tool-specification-layout.component';

describe('MachineToolSpecificationLayoutComponent', () => {
  let component: MachineToolSpecificationLayoutComponent;
  let fixture: ComponentFixture<MachineToolSpecificationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MachineToolSpecificationLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolSpecificationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
