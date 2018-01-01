import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PalletStorageConfiguration} from '../../types/pallet-storage-configuration.type';

@Component({
  selector: 'inz-pallet-form',
  templateUrl: './pallet-form.component.html',
  styleUrls: ['./pallet-form.component.sass']
})
export class PalletFormComponent implements OnInit {
  @Input() palletForm: FormGroup;
  @Input() label: string;
  @Input() required: boolean;
  palletStorageConfiguration = PalletStorageConfiguration;
  constructor() {
  }

  ngOnInit() {
  }

}
