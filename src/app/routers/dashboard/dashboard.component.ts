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

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public tree: Folder[] = [];
  private selectedFolderId;
  // selectFolderSubscription: Subscription;
  // form: FormDTO;
  // @ViewChild('content') private modalContent: TemplateRef<any>;

  constructor(private folderService: FolderService,
              private formService: FormService,
              private modalService: NgbModal,
              private folderTreeService: FolderTreeService) {
  }

  ngOnInit(): void {
    this.fetchFolderTree();
    this.selectedFolderId = this.folderTreeService.selectedFolder;
    this.folderTreeService.onFolderSelect()
      .subscribe(selectedFolderId => {
        this.selectedFolderId = selectedFolderId;
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
      this.folderService.addFolder(convertFolderModelToFolderToCreate(result))
        .subscribe(() => {
          this.fetchFolderTree();
        });
    }).catch(() => {
    });
  }

  addSubfolderToSelectedFolder() {
    const modalRef = this.modalService.open(FolderNodeEditComponent);
    modalRef.componentInstance.folder = new Folder({
      isOpen: false, id: null, children: [], name: '', parent: this.selectedFolderId
    });
    modalRef.result.then((result: Folder) => {
      this.folderService.addFolder(convertFolderModelToFolderToCreate(result))
        .subscribe(() => {
          this.fetchFolderTree();
        });
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
      .subscribe(() => this.fetchFolderTree());
  }

  //
  // private _selectedFolder: FolderToRead;
  //
  // get selectedFolderKey(): FolderToRead {
  //   return this._selectedFolder;
  // }
  //
  // set selectedFolderKey(value: FolderToRead) {
  //   this._selectedFolder = value;
  //   this.onFolderSelect(value);
  // }
  //
  // ngOnInit() {
  //   this.refreshFolderTree();
  //   this.selectFolderSubscription = this.treeService.listenSelectedFolder()
  //     .subscribe(folderDTO => {
  //       this.selectedFolderKey = folderDTO;
  //     });
  // }
  //
  // ngOnDestroy(): void {
  //   this.selectFolderSubscription.unsubscribe();
  // }
  //
  // addFormData() {
  //   this.router.navigate(['/forms', this.form._id, 'records', 'add']);
  // }
  //
  // onFolderSelect(folder: FolderToRead) {
  //   if (folder) {
  //     this.formService
  //       .getFormByFolder(folder._id)
  //       .subscribe(response => {
  //         if (response.length) {
  //           this.form = response[0];
  //         } else {
  //           this.form = null;
  //         }
  //       });
  //   }
  // }
  //
  // addFormToFolder() {
  //   this.router.navigate(['forms', 'create'], {
  //     queryParams: {
  //       folder: this.selectedFolderKey._id
  //     }
  //   });
  // }
  //
  // addMachineToolSpecificationToFolder() {
  //   this.formService.addNewForm({
  //     name: 'machine_tool_specification',
  //     predefined: true,
  //     folder: this.selectedFolderKey._id
  //   }).subscribe(() => this.onFolderSelect(this.selectedFolderKey));
  // }
  //
  //
  // addSubFolder() {
  //   const modalRef = this.modalService.open(FolderFormModalComponent);
  //   modalRef.componentInstance.folder = initFolderToCreate(this.selectedFolderKey._id);
  //   modalRef.result
  //     .then(result => this.addFolder(result))
  //     .catch(() => null);
  // }
  //
  // renameSelectedFolder() {
  //   const modalRef = this.modalService.open(FolderFormModalComponent);
  //   modalRef.componentInstance.folder = this.selectedFolderKey;
  //   modalRef.result
  //     .then((result) => this.updateFolder(result))
  //     .catch((error) => this.onModalClose(error));
  // }
  //

  private updateFolder(folder: FolderToUpdate) {
    this.folderService
      .updateFolder(folder)
      .subscribe(() => this.fetchFolderTree());
  }

  private removeFolder(folder: string) {
    this.folderService
      .removeFolder(folder)
      .subscribe(() => this.fetchFolderTree());
  }

  private fetchFolderTree() {
    this.folderService
      .getFolderTree()
      .pipe(
        map(items => convertFolderToReadToFolderModel(items))
      ).subscribe(folders => this.tree = folders);
  }
}
