import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolBreakageComponent} from './tool-breakage.component';

describe('ToolBreakageComponent', () => {
  let component: ToolBreakageComponent;
  let fixture: ComponentFixture<ToolBreakageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolBreakageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBreakageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
