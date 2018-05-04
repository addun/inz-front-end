import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StandardMachiningProcessComponent} from './standard-machining-process.component';

describe('StandardMachiningProcessComponent', () => {
  let component: StandardMachiningProcessComponent;
  let fixture: ComponentFixture<StandardMachiningProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StandardMachiningProcessComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardMachiningProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
