import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'inz-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.sass']
})
export class CardActionComponent implements OnInit {
  @Input() cardName: string;
  @Input() disable?: boolean;
  @Output() remove: EventEmitter<null> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (!this.disable) {
      this.disable = false;
    }
  }

  emitClick() {
    this.remove.emit();
  }
}
