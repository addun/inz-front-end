import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ToolBreakage} from '../../../shared/models/tool-breakage.model';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-tool-breakage',
  templateUrl: './tool-breakage.component.html',
  styleUrls: ['./tool-breakage.component.sass']
})
export class ToolBreakageComponent implements OnInit {
  toolBreakageForm: FormArray;
  generator = ToolBreakage.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.toolBreakageForm = this.machineToolSpecificationFormService.getToolBreakages(this.machineToolElementId);
      });
  }

}
