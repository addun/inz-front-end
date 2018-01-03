import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-tool-handling-unit-form',
  templateUrl: './tool-handling-unit-form.component.html',
  styleUrls: ['./tool-handling-unit-form.component.sass']
})
export class ToolHandlingUnitFormComponent implements OnInit {
  @Input() toolHandlingUnitForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
