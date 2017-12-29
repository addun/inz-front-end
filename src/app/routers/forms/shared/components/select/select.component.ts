import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'inz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {
  @Input() controlName: string;
  @Input() options;
  form: FormGroup;
  randomId: string = Math.random().toString(36).substring(2, 30);

  constructor(private formComponent: FormComponent) {
  }

  ngOnInit() {
    this.form = this.formComponent.form;
  }

}
