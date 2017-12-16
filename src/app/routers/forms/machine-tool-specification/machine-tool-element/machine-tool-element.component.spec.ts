import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineToolElementComponent } from './machine-tool-element.component';

describe('MachineToolElementComponent', () => {
  let component: MachineToolElementComponent;
  let fixture: ComponentFixture<MachineToolElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineToolElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
