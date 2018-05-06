import {Component, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {FolderDTO} from '../../dto/folder.dto';
import {TreeService} from '../../services/tree/tree.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'inz-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.sass']
})
export class TreeNodeComponent implements OnInit, OnDestroy {
  @Input() folder: FolderDTO;
  @HostBinding('class.is-selected') isSelected = false;
  private selectedFolderSubscription: Subscription;

  constructor(private treeService: TreeService) {
  }

  ngOnInit(): void {
    if (!this.treeService.selectedFolder) {
      return;
    }
    this.isSelected = this.isTheSame(this.treeService.selectedFolder);
    this.selectedFolderSubscription = this.treeService
      .lisenSelectedFolder()
      .subscribe(folderDTO => {
        if (!this.treeService.selectedFolder) {
          return;
        }
        this.isSelected = this.isTheSame(folderDTO);
      });
  }

  ngOnDestroy(): void {
    if (this.selectedFolderSubscription) {
      this.selectedFolderSubscription.unsubscribe();
    }
  }

  @HostListener('click', ['$event'])
  onTreeNodeClick(e) {
    this.treeService.setFolderAsSelected(this.folder);
  }

  toggleChildren() {
    this.folder.isCollapse = !this.folder.isCollapse;
    this.treeService.collapseEvent(this.folder);
  }

  private isTheSame(folder: FolderDTO): boolean {
    return folder._id === this.folder._id;
  }
}
