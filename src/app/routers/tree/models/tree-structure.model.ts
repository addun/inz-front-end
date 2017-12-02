import {Directory} from './directory.model';
import {Tag} from './tag.model';

export class TreeStructure extends Directory {
  tags: Tag[];
  children: any;
}
