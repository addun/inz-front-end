import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ToolStorageConfiguration} from '../../types/tool-storage-configuration.type';

@Component({
  selector: 'inz-tool-magazine-form',
  templateUrl: './tool-magazine-form.component.html',
  styleUrls: ['./tool-magazine-form.component.sass']
})
export class ToolMagazineFormComponent implements OnInit {
  @Input() toolMagazineForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  toolStorageConfiguration = ToolStorageConfiguration;
  constructor() { }

  ngOnInit() {
  }

}
