import {Component, OnInit} from '@angular/core';
import {Folder} from './libs/folder-tree/models/folder';
import {FolderService} from './shared/services/folder/folder.service';
import {map} from 'rxjs/operators';
import {FolderToRead} from './shared/models/folder.model';

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tree: Folder[] = [];
  // selectFolderSubscription: Subscription;
  // form: FormDTO;
  // @ViewChild('content') private modalContent: TemplateRef<any>;

  constructor(private folderService: FolderService) {
  }

  ngOnInit(): void {
    this.fetchFolderTree();
  }

  private fetchFolderTree() {
    this.folderService
      .getFolderTree()
      .pipe(
        map(items => this.convertFolderToReadToFolderModel(items))
      ).subscribe(folders => this.tree = folders);
  }

  private convertFolderToReadToFolderModel(folders: FolderToRead[]): Folder[] {
    return folders.map(item => {
      return new Folder({
        id: item._id,
        name: item.name,
        children: this.convertFolderToReadToFolderModel(item.children),
        isOpen: false
      });
    });
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
  // addNewCollection() {
  //   const modalRef = this.modalService.open(FolderFormModalComponent);
  //   modalRef.result
  //     .then(result => this.addFolder(result))
  //     .catch(error => this.onModalClose(error));
  // }
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
  // refreshFolderTree() {
  //   this.dashboardService
  //     .getFolderTree()
  //     .pipe(map(array => convertFolderToReadArrayToFolderArray(array)))
  //     .subscribe(tree => {
  //       this.tree = tree;
  //       this.selectedFolderKey = this.treeService.selectedFolderKey;
  //     });
  // }
  //
  // removeSelectedFolder() {
  //   const selectedFolderKey = this.treeService.selectedFolderKey;
  //   if (confirm('Are you sure?')) {
  //     this.selectedFolderKey = null;
  //     this.treeService.selectedFolderKey = null;
  //     this.removeFolder(selectedFolderKey._id);
  //   }
  // }
  //
  // private addFolder(folder: FolderToCreate) {
  //   this.dashboardService
  //     .addFolder(folder)
  //     .subscribe(() => this.refreshFolderTree());
  // }
  //
  // private updateFolder(folder: FolderToUpdate) {
  //   this.dashboardService
  //     .updateFolder(folder)
  //     .subscribe(() => this.refreshFolderTree());
  // }
  //
  // private removeFolder(folder: string) {
  //   this.dashboardService
  //     .removeFolder(folder)
  //     .subscribe(() => this.refreshFolderTree());
  // }
  //
  // private onModalClose(error) {
  //   console.log('Close error: ', error);
  // }
}
