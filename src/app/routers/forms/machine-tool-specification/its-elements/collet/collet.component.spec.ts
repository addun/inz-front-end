import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColletComponent} from './collet.component';

describe('ColletComponent', () => {
  let component: ColletComponent;
  let fixture: ComponentFixture<ColletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColletComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
