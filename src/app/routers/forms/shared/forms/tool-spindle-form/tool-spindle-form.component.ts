import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-tool-spindle-form',
  templateUrl: './tool-spindle-form.component.html',
  styleUrls: ['./tool-spindle-form.component.sass']
})
export class ToolSpindleFormComponent implements OnInit {
  @Input() toolSpindleForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
