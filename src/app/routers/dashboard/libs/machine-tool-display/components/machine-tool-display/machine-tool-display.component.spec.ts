import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolDisplayComponent } from './machine-tool-display.component';

describe('MachineToolDisplayComponent', () => {
  let component: MachineToolDisplayComponent;
  let fixture: ComponentFixture<MachineToolDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
