import {Component, ContentChild, ElementRef, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'inz-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input() cardName: string;
  @ContentChild('footer')
  public footer: TemplateRef<ElementRef>;

}
