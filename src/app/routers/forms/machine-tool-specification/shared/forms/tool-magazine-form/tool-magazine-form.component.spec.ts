import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolMagazineFormComponent} from './tool-magazine-form.component';

describe('ToolMagazineFormComponent', () => {
  let component: ToolMagazineFormComponent;
  let fixture: ComponentFixture<ToolMagazineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolMagazineFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolMagazineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
