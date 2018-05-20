import {Folder} from '../libs/folder-tree/models/folder';

export interface FolderToRead {
  _id: string;
  name: string;
  children?: FolderToRead[];
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

export function convertFolderToReadToFolderModel(folders: FolderToRead[]): Folder[] {
  return folders.map(item => {
    if (!item.children) {
      item.children = [];
    }
    return new Folder({
      id: item._id,
      name: item.name,
      parent: item.parent,
      children: convertFolderToReadToFolderModel(item.children),
      isOpen: false
    });
  });
}

export function convertFolderModelToFolderToCreate(folder: Folder): FolderToCreate {
  if (folder.parent) {
    return {name: folder.name, parent: folder.parent};
  } else {
    return {name: folder.name};
  }
}

export function convertFolderModelToFolderToUpdate(folder: Folder): FolderToUpdate {
  return {
    name: folder.name,
    _id: folder.id,
  };
}
