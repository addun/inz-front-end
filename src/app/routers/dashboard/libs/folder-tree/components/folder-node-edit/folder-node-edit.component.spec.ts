import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderNodeEditComponent } from './folder-node-edit.component';

describe('FolderNodeEditComponent', () => {
  let component: FolderNodeEditComponent;
  let fixture: ComponentFixture<FolderNodeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderNodeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderNodeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
