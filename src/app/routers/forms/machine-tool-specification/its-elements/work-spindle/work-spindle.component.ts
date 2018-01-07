import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WorkSpindle} from '../../../shared/models/work-spindle.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-work-spindle',
  templateUrl: './work-spindle.component.html',
  styleUrls: ['./work-spindle.component.sass']
})
export class WorkSpindleComponent implements OnInit {
  workSpindleForm: FormGroup[];
  generator = WorkSpindle.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.parent.params.subscribe(params => {
      this.machineToolElementId = +params['machineToolElementId'];
      this.workSpindleForm = this.machineToolSpecificationFormService.getWorkSpindles(this.machineToolElementId);
    });
  }
}
