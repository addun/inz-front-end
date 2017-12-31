import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'inz-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Input() controlName: string;
  @Input() label: string;
  @Input() type: 'text' | 'number' | 'checkbox' | 'select';
  @Input() options;
  form: FormGroup;
  randomId: string = Math.random().toString(36).substring(2, 30);
  required: boolean;

  constructor(private formComponent: FormComponent) {
  }

  isRequired(): boolean {
    if (this.form.controls[this.controlName].errors) {
      return <boolean>this.form.controls[this.controlName].errors['required'];
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.form = this.formComponent.form;
    this.required = this.isRequired();
  }

  getLabel() {
    if (!this.label) {
      return this.controlName;
    } else {
      return this.label;
    }
  }

}
