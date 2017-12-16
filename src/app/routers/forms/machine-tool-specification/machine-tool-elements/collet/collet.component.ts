import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-collet',
  templateUrl: './collet.component.html',
  styleUrls: ['./collet.component.sass']
})
export class ColletComponent implements OnInit {
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.colletModel;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
