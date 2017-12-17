import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {FormArrayComponent} from '../../../shared/models/form-array-component';
import {MachineToolElementsService} from '../shared/services/machine-tool-elements/machine-tool-elements.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-bar-feeder',
  templateUrl: './bar-feeder.component.html',
  styleUrls: ['./bar-feeder.component.sass']
})
export class BarFeederComponent extends FormArrayComponent implements OnInit {

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
        this.formModel = this.machineToolElementsService.getBarFeederModel(index);
        this.createFormGroup();
        this.createArrayActions();
      });
  }

}
