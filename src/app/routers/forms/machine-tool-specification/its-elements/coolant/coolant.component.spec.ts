import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolantComponent } from './coolant.component';

describe('CoolantComponent', () => {
  let component: CoolantComponent;
  let fixture: ComponentFixture<CoolantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
