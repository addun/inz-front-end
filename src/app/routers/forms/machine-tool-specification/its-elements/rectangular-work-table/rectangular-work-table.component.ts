import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {RectangularWorkTable} from '../../../shared/models/rectangular-work-table.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-rectangular-work-table',
  templateUrl: './rectangular-work-table.component.html',
  styleUrls: ['./rectangular-work-table.component.sass']
})
export class RectangularWorkTableComponent implements OnInit {
  formGroups: FormArray;
  generator = RectangularWorkTable.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.formGroups = this.machineToolSpecificationFormService.getRectangularWorkTables(this.machineToolElementId);
      });
  }
}
