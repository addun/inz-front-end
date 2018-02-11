import {Component, OnInit} from '@angular/core';
import {DashboardService} from './shared/services/dashboard/dashboard.service';
import {Router} from '@angular/router';
import {FolderDTO} from './shared/dto/folder.dto';
import {FormDTO} from '../forms/shared/dto/form.dto';

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tree: FolderDTO[] = [];
  form: FormDTO;
  private selectedFolder: FolderDTO;

  constructor(private dashboardService: DashboardService,
              private router: Router) {
  }

  ngOnInit() {
    this.dashboardService
      .getFolderTree()
      .subscribe(tree => this.tree = tree);
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
    // this.selectedFolder = folder;
    // this.dashboardService
    //   .getDataFromFolder(folder._id)
    //   .subscribe(response => {
    //     this.processFolderData(response);
    //   });
  }

  processFolderData(formData: FormDTO[]) {
    if (!formData.length) {
      this.form = null;
    } else {
      this.form = formData[0];
    }
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
