import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolChangerComponent } from './tool-changer.component';

describe('ToolChangerComponent', () => {
  let component: ToolChangerComponent;
  let fixture: ComponentFixture<ToolChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
