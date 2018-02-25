import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'inz-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  constructor(private location: Location) {
  }


  ngOnInit() {
  }

  saveAndGoBack() {
    this.location.back();
  }


}
