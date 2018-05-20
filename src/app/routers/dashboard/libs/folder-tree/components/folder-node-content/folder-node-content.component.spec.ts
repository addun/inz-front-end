import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderNodeContentComponent } from './folder-node-content.component';

describe('FolderNodeContentComponent', () => {
  let component: FolderNodeContentComponent;
  let fixture: ComponentFixture<FolderNodeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderNodeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderNodeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
