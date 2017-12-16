import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {DynamicFormControlModel, DynamicFormService} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-bar-feeder',
  templateUrl: './bar-feeder.component.html',
  styleUrls: ['./bar-feeder.component.sass']
})
export class BarFeederComponent implements OnInit {
  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.formModel = this.machineToolSpecificationService.barFeederModel;
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
