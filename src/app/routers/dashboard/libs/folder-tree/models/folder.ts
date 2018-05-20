interface FolderCreate {
  id?: string;
  children?: Folder[];
  name?: string;
  isOpen?: boolean;
  parent?: string
}

export class Folder {
  id = '';
  children: Folder[];
  name = '';
  parent? = '';
  isOpen = false;

  constructor(folder: FolderCreate) {
    Object.assign(this, folder);
    if (!folder.children) {
      folder.children = [];
    }
    const temp = folder.children;
    this.children = [];
    temp.forEach(child => this.children.push(new Folder(child)));
  }

}
