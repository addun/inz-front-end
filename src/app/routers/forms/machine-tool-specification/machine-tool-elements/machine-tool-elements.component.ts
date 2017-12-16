import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {MachineToolElementsService} from './shared/services/machine-tool-elements/machine-tool-elements.service';

@Component({
  selector: 'inz-machine-tool-elements',
  templateUrl: './machine-tool-elements.component.html',
  styleUrls: ['./machine-tool-elements.component.sass']
})
export class MachineToolElementsComponent implements OnInit, OnDestroy {
  formArrayModel: any;
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;
  private formArrayControl: FormArray;

  constructor(private formService: DynamicFormService,
              private  machineToolElementsService: MachineToolElementsService) {
  }

  ngOnDestroy() {
  }

  ngOnInit() {
    this.formModel = this.machineToolElementsService.machineToolElementsModel;
    this.formGroup = this.formService.createFormGroup(this.formModel);

    this.formArrayControl = this.formGroup.get('array') as FormArray;
    this.formArrayModel = this.formService.findById('array', this.formModel) as DynamicFormArrayModel;

  }

  addItem() {
    this.formService.addFormArrayGroup(this.formArrayControl, this.formArrayModel);
  }

  removeItem(context: DynamicFormArrayModel, index: number) {
    this.formService.removeFormArrayGroup(index, this.formArrayControl, context);
  }

}
