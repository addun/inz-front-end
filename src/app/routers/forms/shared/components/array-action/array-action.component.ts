import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'inz-array-action',
  templateUrl: './array-action.component.html',
  styleUrls: ['./array-action.component.sass']
})
export class ArrayActionComponent implements OnInit {
  @Output() add: EventEmitter<null> = new EventEmitter<null>();
  @Output() save: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
  }

  ngOnInit() {
  }

  newAction() {
    this.add.emit();
  }

  saveAction() {
    this.save.emit();
  }
}
