import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolAxisComponent } from './machine-tool-axis.component';

describe('MachineToolAxisComponent', () => {
  let component: MachineToolAxisComponent;
  let fixture: ComponentFixture<MachineToolAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
