import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {FormArrayComponent} from '../../../shared/models/form-array-component';
import {MachineToolElementsService} from '../shared/services/machine-tool-elements/machine-tool-elements.service';

@Component({
  selector: 'inz-collet',
  templateUrl: './collet.component.html',
  styleUrls: ['./collet.component.sass']
})
export class ColletComponent extends FormArrayComponent implements OnInit {

  constructor(protected formService: DynamicFormService,
              private machineToolElementsService: MachineToolElementsService) {
    super();
  }

  ngOnInit() {
    this.formModel = this.machineToolElementsService.collet;
    this.createFormGroup();
    this.createArrayActions();
  }

}
