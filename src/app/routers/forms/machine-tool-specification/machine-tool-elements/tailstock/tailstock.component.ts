import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {FormArrayComponent} from '../../../shared/models/form-array-component';
import {MachineToolElementsService} from '../shared/services/machine-tool-elements/machine-tool-elements.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-tailstock',
  templateUrl: './tailstock.component.html',
  styleUrls: ['./tailstock.component.sass']
})
export class TailstockComponent extends FormArrayComponent implements OnInit {

  constructor(protected formService: DynamicFormService,
              private activatedRoute: ActivatedRoute,
              private machineToolElementsService: MachineToolElementsService) {
    super();
  }

  ngOnInit() {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        const index = params['machineToolElementId'];
        this.formModel = this.machineToolElementsService.getTailstockArray(index);
        this.createFormGroup();
        this.createArrayActions();
      });
  }

}
