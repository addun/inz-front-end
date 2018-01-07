import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Indexing} from '../../../shared/models/indexing.model';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-indexing',
  templateUrl: './indexing.component.html',
  styleUrls: ['./indexing.component.sass']
})
export class IndexingComponent implements OnInit {
  indexingForm: FormArray;
  generator = Indexing.getFormControls;
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
        this.indexingForm = this.machineToolSpecificationFormService.getIndexings(this.machineToolElementId);
      });
  }

}
