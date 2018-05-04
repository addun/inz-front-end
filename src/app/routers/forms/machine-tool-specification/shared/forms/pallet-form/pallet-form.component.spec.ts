import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PalletFormComponent} from './pallet-form.component';

describe('PalletFormComponent', () => {
  let component: PalletFormComponent;
  let fixture: ComponentFixture<PalletFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PalletFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
