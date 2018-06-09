import {Component, OnInit} from '@angular/core';
import {Folder} from './libs/folder-tree/models/folder';
import {FolderService} from './services/folder/folder.service';
import {map} from 'rxjs/operators';
import {
  convertFolderModelToFolderToCreate,
  convertFolderModelToFolderToUpdate,
  convertFolderToReadToFolderModel,
  FolderToCreate,
  FolderToUpdate
} from './models/folder.model';
import {FolderTreeService} from './libs/folder-tree/services/folder-tree/folder-tree.service';
import {FormService} from '../forms/shared/services/form/form.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FolderNodeEditComponent} from './libs/folder-tree/components/folder-node-edit/folder-node-edit.component';
import {FormDTO} from '../forms/shared/dto/form.dto';
import {FolderNotificationService} from './services/folder-notification/folder-notification.service';

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public tree: Folder[] = [];
  public selectedFolderId;
  public hasSelectedFolderForm = false;
  public selectedForm: FormDTO;

  constructor(private folderService: FolderService,
              private formService: FormService,
              private modalService: NgbModal,
              private folderNotificationService: FolderNotificationService,
              private folderTreeService: FolderTreeService) {
  }

  ngOnInit(): void {
    this.fetchFolderTree();
    this.selectedFolderId = this.folderTreeService.selectedFolder;
    this.displayViewBaseOnSelectedFolder();
    this.folderTreeService.onFolderSelect()
      .subscribe(selectedFolderId => {
        this.selectedFolderId = selectedFolderId;
        this.displayViewBaseOnSelectedFolder();
      });
  }

  refreshTree() {
    this.fetchFolderTree();
  }

  addNewCollection() {
    const modalRef = this.modalService.open(FolderNodeEditComponent);
    modalRef.componentInstance.folder = new Folder({
      isOpen: false, id: null, children: [], name: ''
    });
    modalRef.result.then((result: Folder) => {
      this.addFolder(convertFolderModelToFolderToCreate(result));
    }).catch(() => {
    });
  }

  addSubfolderToSelectedFolder() {
    const modalRef = this.modalService.open(FolderNodeEditComponent);
    modalRef.componentInstance.folder = new Folder({
      isOpen: false, id: null, children: [], name: '', parent: this.selectedFolderId
    });
    modalRef.result.then((result: Folder) => {
      const folderToCreate = convertFolderModelToFolderToCreate(result);
      this.addFolder(folderToCreate);
    }).catch(() => {
    });
  }

  editSelectedFolder() {
    this.folderService.getFolder(this.selectedFolderId)
      .subscribe(folder => {
        const folders = convertFolderToReadToFolderModel([folder]);
        this.showModalAndEditFolder(folders[0]);
      });

  }

  removeSelectedFolder() {
    if (confirm('Are you sure?')) {
      this.removeFolder(this.selectedFolderId);
      this.folderTreeService.selectedFolder = null;
    }
  }

  createMachineToolSpecificationForm() {
    this.formService.addNewForm({
      name: 'Machine tool specification form',
      predefined: true,
      folder: this.selectedFolderId
    }).subscribe(response => {
      this.hasSelectedFolderForm = true;
    });
  }

  private showModalAndEditFolder(folder: Folder) {
    const modalRef = this.modalService.open(FolderNodeEditComponent);
    modalRef.componentInstance.folder = folder;
    modalRef.result.then((result: Folder) => {
      this.updateFolder(convertFolderModelToFolderToUpdate(result));
    }).catch(() => {
    });
  }

  private addFolder(folder: FolderToCreate) {
    this.folderService
      .addFolder(folder)
      .subscribe(() => {
        this.folderNotificationService.folderHasBeenCreate();
        this.fetchFolderTree();
      }, error => {
        this.folderNotificationService.serverError();
      });
  }

  private displayViewBaseOnSelectedFolder() {
    this.hasSelectedFolderForm = false;
    this.formService.getForm(this.selectedFolderId)
      .subscribe(value => {
        this.hasSelectedFolderForm = true;
        this.selectedForm = value;
      }, error => {
        this.hasSelectedFolderForm = false;
      });
  }

  private updateFolder(folder: FolderToUpdate) {
    this.folderService
      .updateFolder(folder)
      .subscribe(() => {
        this.folderNotificationService.folderHasBeenEdited();
        this.fetchFolderTree();
      }, error => {
        this.folderNotificationService.serverError();

      });
  }

  private removeFolder(folder: string) {
    this.folderService
      .removeFolder(folder)
      .subscribe(() => {
        this.folderNotificationService.folderHasBeenRemoved();
        this.fetchFolderTree();
      }, error => {
        this.folderNotificationService.serverError();
      });
  }

  private fetchFolderTree() {
    this.folderService
      .getFolderTree()
      .pipe(
        map(items => convertFolderToReadToFolderModel(items))
      ).subscribe(folders => this.tree = folders);
  }
}
