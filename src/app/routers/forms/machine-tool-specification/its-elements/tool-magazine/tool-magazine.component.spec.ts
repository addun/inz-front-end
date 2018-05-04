import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolMagazineComponent} from './tool-magazine.component';

describe('ToolMagazineComponent', () => {
  let component: ToolMagazineComponent;
  let fixture: ComponentFixture<ToolMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolMagazineComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
