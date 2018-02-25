import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurretFormComponent } from './turret-form.component';

describe('TurretFormComponent', () => {
  let component: TurretFormComponent;
  let fixture: ComponentFixture<TurretFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurretFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurretFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
