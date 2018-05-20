import { TestBed, inject } from '@angular/core/testing';

import { FolderTreeService } from './folder-tree.service';

describe('FolderTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolderTreeService]
    });
  });

  it('should be created', inject([FolderTreeService], (service: FolderTreeService) => {
    expect(service).toBeTruthy();
  }));
});
