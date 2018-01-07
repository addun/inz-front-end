import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.sass']
})
export class FormArrayComponent implements OnInit {
  @Input() forms: FormGroup[];
  @Input() generator: () => { [key: string]: AbstractControl };
  @Input() label: string;
  @Output() save: EventEmitter<null> = new EventEmitter<null>();
  @ContentChild('controls') controls: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.forms);
  }

  addGroup() {
    this.forms.push(
      new FormGroup(this.generator())
    );
    console.log(this.forms);
  }

  saveGroups() {
    this.save.emit();
  }

  removeGroup(index) {
    this.forms.splice(index, 1);
  }

}
