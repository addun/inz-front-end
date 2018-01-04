import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolMagazineContentsComponent } from './tool-magazine-contents.component';

describe('ToolMagazineContentsComponent', () => {
  let component: ToolMagazineContentsComponent;
  let fixture: ComponentFixture<ToolMagazineContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolMagazineContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolMagazineContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
