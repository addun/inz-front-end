import { FolderTreeModule } from './folder-tree.module';

describe('FolderTreeModule', () => {
  let folderTreeModule: FolderTreeModule;

  beforeEach(() => {
    folderTreeModule = new FolderTreeModule();
  });

  it('should create an instance', () => {
    expect(folderTreeModule).toBeTruthy();
  });
});
