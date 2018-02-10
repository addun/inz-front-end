import {Component, OnInit} from '@angular/core';
import {FolderDTO} from '../../shared/models/folder.model';
import {DashboardService} from './shared/services/dashboard/dashboard.service';

@Component({
  selector: 'inz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  tree: FolderDTO[] = [];
  private selectedFolder: FolderDTO;

  constructor(private  dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService
      .getFolderTree()
      .subscribe(tree => this.tree = tree);
  }

  addChild() {
    this.dashboardService.addFolder({
      name: Math.random().toFixed(2),
      parent: this.selectedFolder ? this.selectedFolder._id : null
    })
      .subscribe(addedFolder => {
        if (this.selectedFolder) {
          this.selectedFolder.children.push(addedFolder);
        } else {
          this.tree.push(addedFolder);
        }
      });
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
    console.log(folder);
    this.dashboardService
      .addFolder(folder)
      .subscribe(addedFolder => {
        folder._id = addedFolder._id;
      });
  }
}
