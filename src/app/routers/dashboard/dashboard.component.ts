import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DashboardService} from './shared/services/dashboard/dashboard.service';
import {Router} from '@angular/router';
import {FormDTO} from '../forms/shared/dto/form.dto';
import {FormService} from '../forms/shared/services/form/form.service';
import {TreeService} from './shared/services/tree/tree.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FolderFormModalComponent} from './shared/components/folder-form-modal/folder-form-modal.component';
import {Subscription} from 'rxjs';
import {FolderToCreate, FolderToRead, FolderToUpdate, initFolderToCreate} from './shared/models/folder.model';

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  selectFolderSubscription: Subscription;
  tree: FolderToRead[] = [];
  form: FormDTO;
  @ViewChild('content') private modalContent: TemplateRef<any>;

  constructor(private dashboardService: DashboardService,
              private formService: FormService,
              private treeService: TreeService,
              private modalService: NgbModal,
              private router: Router) {
  }

  private _selectedFolder: FolderToRead;

  get selectedFolder(): FolderToRead {
    return this._selectedFolder;
  }

  set selectedFolder(value: FolderToRead) {
    this._selectedFolder = value;
    this.onFolderSelect(value);
  }

  ngOnInit() {
    this.refreshFolderTree();
    this.selectFolderSubscription = this.treeService.listenSelectedFolder()
      .subscribe(folderDTO => {
        this.selectedFolder = folderDTO;
      });
  }

  ngOnDestroy(): void {
    this.selectFolderSubscription.unsubscribe();
  }

  addFormData() {
    this.router.navigate(['/forms', this.form._id, 'records', 'add']);
  }

  onFolderSelect(folder: FolderToRead) {
    if (folder) {
      this.formService
        .getFormByFolder(folder._id)
        .subscribe(response => {
          if (response.length) {
            this.form = response[0];
          } else {
            this.form = null;
          }
        });
    }
  }

  addFormToFolder() {
    this.router.navigate(['forms', 'create'], {
      queryParams: {
        folder: this.selectedFolder._id
      }
    });
  }

  addMachineToolSpecificationToFolder() {
    this.formService.addNewForm({
      name: 'machine_tool_specification',
      predefined: true,
      folder: this.selectedFolder._id
    }).subscribe(_ => this.onFolderSelect(this.selectedFolder));
  }

  addNewCollection() {
    const modalRef = this.modalService.open(FolderFormModalComponent);
    modalRef.result
      .then(result => this.addFolder(result))
      .catch(error => this.onModalClose(error));
  }

  addSubFolder() {
    const modalRef = this.modalService.open(FolderFormModalComponent);
    modalRef.componentInstance.folder = initFolderToCreate(this.selectedFolder._id);
    modalRef.result
      .then(result => this.addFolder(result))
      .catch(_ => null);
  }

  renameSelectedFolder() {
    const modalRef = this.modalService.open(FolderFormModalComponent);
    modalRef.componentInstance.folder = this.selectedFolder;
    modalRef.result
      .then((result) => this.updateFolder(result))
      .catch((error) => this.onModalClose(error));
  }

  refreshFolderTree() {
    this.dashboardService
      .getFolderTree()
      .subscribe(tree => {
        this.tree = tree;
        this.selectedFolder = this.treeService.selectedFolder;
      });
  }

  removeSelectedFolder() {
    const selectedFolder = this.treeService.selectedFolder;
    if (confirm('Are you sure?')) {
      this.selectedFolder = null;
      this.treeService.selectedFolder = null;
      this.removeFolder(selectedFolder._id);
    }
  }

  private addFolder(folder: FolderToCreate) {
    this.dashboardService
      .addFolder(folder)
      .subscribe(_ => this.refreshFolderTree());
  }

  private updateFolder(folder: FolderToUpdate) {
    this.dashboardService
      .updateFolder(folder)
      .subscribe(_ => this.refreshFolderTree());
  }

  private removeFolder(folder: string) {
    this.dashboardService
      .removeFolder(folder)
      .subscribe(_ => this.refreshFolderTree());
  }

  private onModalClose(error) {
    console.log('error');
  }
}
