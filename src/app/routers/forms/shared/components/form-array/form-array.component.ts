import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.sass']
})
export class FormArrayComponent implements OnInit {
  @Input() forms: FormArray;
  @Input() formGroupGenerator: { [key: string]: AbstractControl };
  @Input() label: string;
  @ContentChild('controls') controls: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.forms);
  }

  addGroup() {
    this.forms.push(
      new FormGroup(this.formGroupGenerator)
    );
  }

  removeGroup(index) {
    this.forms.removeAt(index);
  }

}
