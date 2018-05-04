import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TSlotFormComponent} from './t-slot-form.component';

describe('TSlotFormComponent', () => {
  let component: TSlotFormComponent;
  let fixture: ComponentFixture<TSlotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TSlotFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSlotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
