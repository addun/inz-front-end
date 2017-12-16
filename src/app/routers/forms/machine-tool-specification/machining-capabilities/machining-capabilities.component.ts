import {Component, OnInit} from '@angular/core';
import {DynamicFormArrayModel, DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-machining-capability',
  templateUrl: './machining-capabilities.component.html',
  styleUrls: ['./machining-capabilities.component.sass']
})
export class MachiningCapabilitiesComponent implements OnInit {
  formArrayModel: DynamicFormArrayModel;
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;
  formArrayControl: FormArray;

  constructor(private formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.machiningCapabilitiesModel;
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
