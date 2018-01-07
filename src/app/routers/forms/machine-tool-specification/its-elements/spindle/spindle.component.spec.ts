import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpindleComponent } from './spindle.component';

describe('SpindleComponent', () => {
  let component: SpindleComponent;
  let fixture: ComponentFixture<SpindleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpindleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpindleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
