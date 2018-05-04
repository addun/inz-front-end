import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-tool-changer-form',
  templateUrl: './tool-changer-form.component.html',
  styleUrls: ['./tool-changer-form.component.sass']
})
export class ToolChangerFormComponent implements OnInit {
  @Input() toolChangerForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
