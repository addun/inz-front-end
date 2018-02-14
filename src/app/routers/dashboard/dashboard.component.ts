import {Component, OnInit} from '@angular/core';
import {DashboardService} from './shared/services/dashboard/dashboard.service';
import {Router} from '@angular/router';
import {FolderDTO} from './shared/dto/folder.dto';
import {FormDTO} from '../forms/shared/dto/form.dto';
import {FormService} from '../forms/shared/services/form/form.service';

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tree: FolderDTO[] = [];
  form: FormDTO;
  selectedFolder: FolderDTO;

  constructor(private dashboardService: DashboardService,
              private formService: FormService,
              private router: Router) {
  }

  ngOnInit() {
    this.dashboardService
      .getFolderTree()
      .subscribe(tree => this.tree = tree);
  }

  addFormData() {
    this.router.navigate(['/forms', this.form._id, 'records', 'add']);
  }

  onFolderCollapse(folder: FolderDTO) {
    this.dashboardService
      .updateFolder(folder)
      .subscribe();
  }

  onFolderRemove(folder: FolderDTO) {
    this.dashboardService
      .removeFolder(folder._id)
      .subscribe();
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

  addRootFolder() {
    const newFolder: FolderDTO = {
      name: 'Untitled folder',
      isCollapse: true,
      children: []
    };
    this.tree.push(newFolder);
    this.onFolderAdd(newFolder);
  }

  addFormToFolder() {
    this.router.navigate(['forms', 'create'], {
      queryParams: {
        folder: this.selectedFolder._id
      }
    });
  }

  onFolderRename(folder: FormDTO) {
    this.dashboardService
      .updateFolder(folder)
      .subscribe();
  }
}
