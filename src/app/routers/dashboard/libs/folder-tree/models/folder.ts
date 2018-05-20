export class Folder {
  id: string;
  children: Folder[];
  name: string;
  isOpen = false;

  constructor(folder: Folder) {
    Object.assign(this, folder);
    const temp = folder.children;
    this.children = [];
    temp.forEach(child => this.children.push(new Folder(child)));
  }

}
