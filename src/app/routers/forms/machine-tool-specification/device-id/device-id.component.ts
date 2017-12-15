import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {deviceIdForm} from '../../shared/forms/device-id.form';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';

@Component({
  selector: 'inz-device-id',
  templateUrl: './device-id.component.html',
  styleUrls: ['./device-id.component.sass']
})
export class DeviceIdComponent implements OnInit, OnDestroy {
  formModel: DynamicFormControlModel[] = deviceIdForm();
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {
  }

  ngOnDestroy() {
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
