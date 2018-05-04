import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TailstockComponent} from './tailstock.component';

describe('TailstockComponent', () => {
  let component: TailstockComponent;
  let fixture: ComponentFixture<TailstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TailstockComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
