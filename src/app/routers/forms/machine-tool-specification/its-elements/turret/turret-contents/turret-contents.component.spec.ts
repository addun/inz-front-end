import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurretContentsComponent } from './turret-contents.component';

describe('TurretContentsComponent', () => {
  let component: TurretContentsComponent;
  let fixture: ComponentFixture<TurretContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurretContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurretContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
