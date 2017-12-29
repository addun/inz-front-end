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
  form: FormGroup;
  randomId: string = Math.random().toString(36).substring(2, 30);

  constructor(private formComponent: FormComponent) {
  }

  ngOnInit() {
    this.form = this.formComponent.form;
  }

}
