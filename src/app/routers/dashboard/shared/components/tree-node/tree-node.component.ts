import {Component, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {TreeService} from '../../services/tree/tree.service';
import {Subscription} from 'rxjs';
import {FolderToRead} from '../../models/folder.model';

@Component({
  selector: 'inz-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.sass']
})
export class TreeNodeComponent implements OnInit, OnDestroy {
  @Input() folder: FolderToRead;
  @HostBinding('class.is-selected') isSelected = false;
  private selectedFolderSubscription: Subscription;

  constructor(private treeService: TreeService) {
  }

  ngOnInit(): void {
    this.isSelected = this.isTheSame(this.treeService.selectedFolder);
    this.selectedFolderSubscription = this.treeService
      .listenSelectedFolder()
      .subscribe(folderDTO => {
        this.isSelected = this.isTheSame(folderDTO);
      });
  }

  ngOnDestroy(): void {
  }

  @HostListener('click', ['$event'])
  onTreeNodeClick(e) {
    this.treeService.selectedFolder = this.folder;
  }

  private isTheSame(folder: FolderToRead): boolean {
    if (!folder) {
      return false;
    }
    return folder._id === this.folder._id;
  }
}
