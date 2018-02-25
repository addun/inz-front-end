import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Collet} from '../../shared/models/collet.model';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-collet',
  templateUrl: './collet.component.html',
  styleUrls: ['./collet.component.sass']
})
export class ColletComponent implements OnInit {
  colletGroups: FormArray;
  generator = Collet.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.colletGroups = this.machineToolSpecificationFormService.getCollets(this.machineToolElementId);
      });
  }

}
