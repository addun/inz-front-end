import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BarFeederComponent} from './bar-feeder.component';

describe('BarFeederComponent', () => {
  let component: BarFeederComponent;
  let fixture: ComponentFixture<BarFeederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarFeederComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarFeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
