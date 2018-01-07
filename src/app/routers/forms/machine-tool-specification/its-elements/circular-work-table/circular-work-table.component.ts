import {Component, OnInit} from '@angular/core';
import {CircularWorkTable} from '../../../shared/models/circular-work-table.model';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-circular-work-table',
  templateUrl: './circular-work-table.component.html',
  styleUrls: ['./circular-work-table.component.sass']
})
export class CircularWorkTableComponent implements OnInit {
  circularWorkTableForm: FormGroup[];
  generator = CircularWorkTable.getFormControls;
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
        this.circularWorkTableForm = this.machineToolSpecificationFormService.getCircularWorkTables(this.machineToolElementId);
      });
  }
}
