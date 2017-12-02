export class Directory {
  id?: number;
  value: string;
  parent?: number;

  constructor(directory: Directory) {
    Object.assign(this, directory);
  }
}
