export interface FolderToRead {
  _id: string;
  name: string;
  children: FolderToRead[];
  path: string;
  parent?: string;
}

export interface FolderToCreate {
  name: string;
  parent?: string;
}

export interface FolderToUpdate {
  _id: string;
  name: string;
}

export function initFolderToCreate(parent?: string): FolderToCreate {
  if (parent) {
    return {name: '', parent: parent};
  } else {
    return {name: ''};
  }
}

export class Folder {
  _id: string;
  children: Folder[];
  name: string;
  parent: string;
  path: string;
  isOpen = false;

  constructor(folder: Folder) {
    Object.assign(this, folder);
    this.children = convertFolderToReadArrayToFolderArray(folder.children);
  }
}

export function convertFolderToReadArrayToFolderArray(folder: FolderToRead[]): Folder[] {
  return folder.map(
    item => new Folder(<Folder>item)
  );
}
