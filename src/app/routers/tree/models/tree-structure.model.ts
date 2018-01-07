import {Directory} from './directory.model';

export class TreeStructure extends Directory {
  children: TreeStructure[];
}
