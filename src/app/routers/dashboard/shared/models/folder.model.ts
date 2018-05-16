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

export function initEmptyFolderToRead(): FolderToRead {
  return {
    _id: '',
    children: [],
    name: '',
    path: ''
  };
}
