import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DashboardService} from './shared/services/dashboard/dashboard.service';
import {Router} from '@angular/router';
import {FolderDTO} from './shared/dto/folder.dto';
import {FormDTO} from '../forms/shared/dto/form.dto';
import {FormService} from '../forms/shared/services/form/form.service';
import {TreeService} from './shared/services/tree/tree.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FolderFormModalComponent} from './shared/components/folder-form-modal/folder-form-modal.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  selectFolderSub: Subscription;
  collapseSubscription: Subscription;
  tree: FolderDTO[] = [];
  form: FormDTO;
  selectedFolder: FolderDTO;
  @ViewChild('content') private modalContent: TemplateRef<any>;

  constructor(private dashboardService: DashboardService,
              private formService: FormService,
              private treeService: TreeService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.selectedFolder = JSON.parse(localStorage.getItem('selectedFolder'));
    if (this.selectedFolder) {
      this.onFolderSelect(this.selectedFolder);
    }
    this.refreshFolderTree();

    this.collapseSubscription = this.treeService
      .lisenCollapseFolder()
      .subscribe(folderDTO => {
        this.dashboardService
          .updateFolder(folderDTO)
          .subscribe();
      });

    this.selectFolderSub = this.treeService.lisenSelectedFolder()
      .subscribe(folderDTO => {
        if (folderDTO) {
          this.onFolderSelect(folderDTO);
        }
      });
  }

  ngOnDestroy(): void {
    localStorage.setItem('selectedFolder', JSON.stringify(this.selectedFolder));
    this.collapseSubscription.unsubscribe();
    this.selectFolderSub.unsubscribe();
  }

  addFormData() {
    this.router.navigate(['/forms', this.form._id, 'records', 'add']);
  }

  onFolderAdd(folder: FolderDTO) {
    this.dashboardService
      .addFolder(folder)
      .subscribe(addedFolder => {
        folder._id = addedFolder._id;
      });
  }

  onFolderSelect(folder: FolderDTO) {
    this.selectedFolder = folder;
    this.formService
      .getFormByFolder(this.selectedFolder._id)
      .subscribe(response => {
        if (response.length) {
          this.form = response[0];
        } else {
          this.form = null;
        }
      });
  }

  addNewCollection() {
    const modalRef = this.modalService.open(FolderFormModalComponent);
    modalRef.componentInstance.name = '';
    modalRef.componentInstance.isCreated = true;

    modalRef.result.then((result) => {
      const newFolder: FolderDTO = {
        name: result.name,
        isCollapse: true,
        children: []
      };
      this.tree.push(newFolder);
      this.onFolderAdd(newFolder);
    }).catch((error) => {
    });

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

  renameSelectedFolder() {
    if (!this.treeService.selectedFolder) {
      return;
    }
    const modalRef = this.modalService.open(FolderFormModalComponent);
    modalRef.componentInstance.name = this.treeService.selectedFolder.name;
    modalRef.componentInstance.isCreated = false;

    modalRef.result.then((result) => {
      this.treeService.selectedFolder.name = result.name;
      this.dashboardService
        .updateFolder(this.treeService.selectedFolder)
        .subscribe();
    }).catch((error) => {
    });
  }

  removeSelectedFolder() {
    if (!this.treeService.selectedFolder) {
      return;
    }
    const selectedFolder = this.treeService.selectedFolder;
    if (confirm('Are you sure?')) {
      this.dashboardService
        .removeFolder(selectedFolder._id)
        .subscribe(_ => {
          this.selectedFolder = null;
          this.refreshFolderTree();
        });
    }
  }

  addFolderToSelectedFolder() {
    if (!this.treeService.selectedFolder) {
      return;
    }
    const modalRef = this.modalService.open(FolderFormModalComponent);
    modalRef.componentInstance.name = '';
    modalRef.componentInstance.isCreated = true;

    modalRef.result.then((result) => {
      const newFolder: FolderDTO = {
        name: result.name,
        parent: this.treeService.selectedFolder._id,
        isCollapse: true,
        children: []
      };
      this.dashboardService
        .addFolder(newFolder)
        .subscribe(_ => {
          this.refreshFolderTree();
        });
    }).catch((error) => {
    });
  }

  private refreshFolderTree() {
    this.dashboardService
      .getFolderTree()
      .subscribe(tree => {
        this.tree = tree;
        this.treeService.setFolderAsSelected(this.selectedFolder);
      });
  }
}
