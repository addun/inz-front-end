import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationFormService} from '../services/machine-tool-specification-form/machine-tool-specification-form.service';
import {Location} from '@angular/common';
import {FormService} from '../../../shared/services/form/form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'inz-machine-tool-specification-layout',
  templateUrl: './machine-tool-specification-layout.component.html',
  styleUrls: ['./machine-tool-specification-layout.component.sass']
})
export class MachineToolSpecificationLayoutComponent implements OnInit {

  constructor(private formService: FormService,
              private router: Router,
              private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private location: Location) {
  }

  ngOnInit() {
  }

  saveAndGoBack() {
    this.formService.updateRecord({
      _id: this.machineToolSpecificationFormService.formData.record,
      values: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
    })
      .subscribe(_ => {
        this.location.back();
      });
  }

}
