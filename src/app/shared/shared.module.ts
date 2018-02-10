import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FolderTreeComponent} from './components/tree/tree.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
  ],
  declarations: [
    FolderTreeComponent,
    TreeNodeComponent
  ],
  exports: [
    NgbModule,
    RouterModule,
    FolderTreeComponent
  ]
})
export class SharedModule {
}
