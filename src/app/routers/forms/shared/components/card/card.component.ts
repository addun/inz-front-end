import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'inz-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() cardName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
