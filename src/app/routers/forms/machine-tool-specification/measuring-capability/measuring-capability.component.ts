import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {measuringCapabilityForm} from '../../shared/forms/measuring-capability.form';

@Component({
  selector: 'inz-measuring-capability',
  templateUrl: './measuring-capability.component.html',
  styleUrls: ['./measuring-capability.component.sass']
})
export class MeasuringCapabilityComponent implements OnInit, OnDestroy {
  formModel: DynamicFormControlModel[] = measuringCapabilityForm();
  formGroup: FormGroup;


  constructor(private formService: DynamicFormService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }


}
