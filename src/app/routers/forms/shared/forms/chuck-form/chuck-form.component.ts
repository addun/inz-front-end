import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-chuck-form',
  templateUrl: './chuck-form.component.html',
  styleUrls: ['./chuck-form.component.sass']
})
export class ChuckFormComponent implements OnInit {
  @Input() chuckForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
