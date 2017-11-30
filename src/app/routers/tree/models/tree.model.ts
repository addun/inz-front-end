export class Tree {
  id: number;
  name: string;
  parent?: number;
  hasChildren: boolean;

  constructor(tree: Tree) {
    Object.assign(this, tree);
  }
}
