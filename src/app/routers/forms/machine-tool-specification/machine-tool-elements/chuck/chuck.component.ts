import {Component, OnInit} from '@angular/core';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.sass']
})
export class ChuckComponent implements OnInit {
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) {
  }

  ngOnInit() {
    // this.formModel = this.machineToolSpecificationService.barFeederModel;
    // this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
