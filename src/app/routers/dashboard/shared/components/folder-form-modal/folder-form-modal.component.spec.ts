import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderFormModalComponent } from './folder-form-modal.component';

describe('FolderFormModalComponent', () => {
  let component: FolderFormModalComponent;
  let fixture: ComponentFixture<FolderFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
