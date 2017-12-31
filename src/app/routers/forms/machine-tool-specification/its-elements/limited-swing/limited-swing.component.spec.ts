import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedSwingComponent } from './limited-swing.component';

describe('LimitedSwingComponent', () => {
  let component: LimitedSwingComponent;
  let fixture: ComponentFixture<LimitedSwingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitedSwingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedSwingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
