export interface FolderDTO {
  _id?: string;
  name: string;
  children?: FolderDTO[];
  isCollapse?: boolean;
  path?: string;
  parent?: string;
}
