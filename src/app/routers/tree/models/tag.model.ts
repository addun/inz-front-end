export class Tag {
  id?: number;
  value: string;
  node: number;

  constructor(Tag: Tag) {
    Object.assign(this, Tag);
  }
}
