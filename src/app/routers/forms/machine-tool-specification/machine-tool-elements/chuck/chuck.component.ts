import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {FormArrayComponent} from '../../../shared/models/form-array-component';
import {MachineToolElementsService} from '../shared/services/machine-tool-elements/machine-tool-elements.service';

@Component({
  selector: 'inz-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.sass']
})
export class ChuckComponent extends FormArrayComponent implements OnInit {

  constructor(protected formService: DynamicFormService,
              private machineToolElementsService: MachineToolElementsService) {
    super();
  }

  ngOnInit() {
    this.formModel = this.machineToolElementsService.chuckModel;
    this.createFormGroup();
    this.createArrayActions();
  }

}
