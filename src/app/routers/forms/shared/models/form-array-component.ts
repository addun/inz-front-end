import {DynamicFormArrayModel} from '@ng-dynamic-forms/core';
import {FormComponent} from './form-component';
import {FormArray} from '@angular/forms';

export abstract class FormArrayComponent extends FormComponent {
  formArrayControl: FormArray;
  formArrayModel: DynamicFormArrayModel;

  addItem() {
    this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
  }

  removeItem(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.formArrayControl, context);
  }

  createArrayActions() {
    this.formArrayControl = this.formGroup.get('array') as FormArray;
    this.formArrayModel = this.formService.findById('array', this.formModel) as DynamicFormArrayModel;
  }

}
