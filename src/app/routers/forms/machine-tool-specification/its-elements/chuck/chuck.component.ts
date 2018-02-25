import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Chuck} from '../../shared/models/chuck.model';
import {MachineToolSpecificationFormService} from '../../shared/services/';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'inz-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.sass']
})
export class ChuckComponent implements OnInit {
  chuckForm: FormArray;
  generator = Chuck.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.chuckForm = this.machineToolSpecificationFormService.getChucks(this.machineToolElementId);
      });
  }

}
