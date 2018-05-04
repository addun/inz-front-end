import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-t-slot-form',
  templateUrl: './t-slot-form.component.html',
  styleUrls: ['./t-slot-form.component.sass']
})
export class TSlotFormComponent implements OnInit {
  @Input() tSlotForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
