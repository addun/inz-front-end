import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-turret-form',
  templateUrl: './turret-form.component.html',
  styleUrls: ['./turret-form.component.sass']
})
export class TurretFormComponent implements OnInit {
  @Input() turretForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
