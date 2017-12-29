import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationControlsComponent } from './location-controls.component';

describe('LocationControlsComponent', () => {
  let component: LocationControlsComponent;
  let fixture: ComponentFixture<LocationControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
