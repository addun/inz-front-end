import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-tool-assembly-form',
  templateUrl: './tool-assembly-form.component.html',
  styleUrls: ['./tool-assembly-form.component.sass']
})
export class ToolAssemblyFormComponent implements OnInit {
  @Input() toolAssemblyForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
