import {Component, OnInit} from '@angular/core';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.sass']
})
export class InstallationComponent implements OnInit {
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.installationModel;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
