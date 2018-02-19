import {Component, OnInit} from '@angular/core';
import {ThreadedSpindle} from '../../../shared/models/threaded-spindle.model';
import {FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services/machine-tool-specification-form/machine-tool-specification-form.service';

@Component({
  selector: 'inz-threaded-spindle',
  templateUrl: './threaded-spindle.component.html',
  styleUrls: ['./threaded-spindle.component.sass']
})
export class ThreadedSpindleComponent implements OnInit {
  threadedSpindleForm: FormArray[];
  generator = ThreadedSpindle.getFormControls;
  private machineToolElementId: number;


  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.machineToolElementId = +params['machineToolElementId'];
      this.threadedSpindleForm = this.machineToolSpecificationFormService.getThreadedSpindles(this.machineToolElementId);
    });
  }
}
