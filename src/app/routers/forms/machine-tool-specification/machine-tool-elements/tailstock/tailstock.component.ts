import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {tailstockForm} from '../../../shared/forms/tailstock.form';

@Component({
  selector: 'inz-tailstock',
  templateUrl: './tailstock.component.html',
  styleUrls: ['./tailstock.component.sass']
})
export class TailstockComponent implements OnInit, OnDestroy {
  formModel: DynamicFormControlModel[] = tailstockForm();
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {
  }

  ngOnDestroy() {
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
