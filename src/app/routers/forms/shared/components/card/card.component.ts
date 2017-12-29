import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'inz-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() cardName: string;
  @ContentChild(TemplateRef)
  public footer: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
