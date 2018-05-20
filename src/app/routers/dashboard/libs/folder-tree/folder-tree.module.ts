import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FolderNodeComponent} from './components/folder-node/folder-node.component';
import {FolderNodeContentComponent} from './components/folder-node-content/folder-node-content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FolderNodeEditComponent} from './components/folder-node-edit/folder-node-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FolderTreeService} from './services/folder-tree/folder-tree.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    FolderTreeService,
  ],
  declarations: [
    FolderNodeComponent,
    FolderNodeContentComponent,
    FolderNodeEditComponent,
  ],
  entryComponents: [
    FolderNodeEditComponent,
  ],
  exports: [
    FolderNodeComponent,
    FolderNodeEditComponent,
  ]
})
export class FolderTreeModule {
}
