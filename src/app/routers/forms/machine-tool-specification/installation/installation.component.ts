import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormComponent} from '../../shared/models/form-component';

@Component({
  selector: 'inz-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.sass']
})
export class InstallationComponent extends FormComponent implements OnInit {
  constructor(protected formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
    super();
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.installationModel;
    this.createFormGroup();
  }

}
