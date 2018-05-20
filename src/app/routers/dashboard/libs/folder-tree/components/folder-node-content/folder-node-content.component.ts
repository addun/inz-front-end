import {Component, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Folder} from '../../models/folder';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FolderNodeEditComponent} from '../folder-node-edit/folder-node-edit.component';
import {FolderTreeService} from '../../services/folder-tree/folder-tree.service';

@Component({
  selector: 'inz-folder-node-content',
  templateUrl: './folder-node-content.component.html',
  styleUrls: ['./folder-node-content.component.sass']
})
export class FolderNodeContentComponent implements OnInit, OnDestroy {
  @Input() folder: Folder;
  @HostBinding('class.is-selected') isFolderSelected = false;

  constructor(private modalService: NgbModal, private folderTreeService: FolderTreeService) {
  }

  ngOnInit() {
    this.isFolderSelected = this.isSelected();
    this.folderTreeService.onFolderSelect().subscribe(() => {
      this.isFolderSelected = this.isSelected();
    });
    this.folder.isOpen = this.folderTreeService.getSavedNodeState(this.folder.id);
  }

  @HostListener('dblclick')
  onComponentDblClick() {
    this.toggleShowChildren();
  }

  @HostListener('click')
  onComponentClick() {
    this.folderTreeService.selectedFolder = this.folder.id;
  }

  toggleShowChildren(): void {
    this.folder.isOpen = !this.folder.isOpen;
    this.folderTreeService.saveNodeState(this.folder.id, this.folder.isOpen);
  }

  editFolder() {
    const modalRef = this.modalService.open(FolderNodeEditComponent);
    modalRef.componentInstance.folder = this.folder;
    modalRef.result.then((result: Folder) => {
      this.folder = result;
    }).catch(() => {
    });
  }

  isSelected(): boolean {
    return this.folder.id === this.folderTreeService.selectedFolder;
  }

  ngOnDestroy(): void {

  }

}
