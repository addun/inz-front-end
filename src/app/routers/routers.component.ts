import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TreeService} from './tree/services/tree/tree.service';
import {MenuItemSelectedEvent, NodeEvent, NodeMenuItemAction, Tree, TreeModel} from 'ng2-tree';
import {Directory} from './tree/models/directory.model';
import {Tag} from './tree/models/tag.model';
import {TreeToastService} from './tree/services/toast/tree-toast.service';

@Component({
  selector: 'inz-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.sass']
})
export class RoutersComponent implements OnInit {
  ngOnInit(): void {
  }

}
