import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';

export abstract class FormComponent {
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;
  protected formService: DynamicFormService;

  createFormGroup() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }
}
