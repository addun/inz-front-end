import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationFormService} from '../services/machine-tool-specification-form/machine-tool-specification-form.service';
import {Location} from '@angular/common';
import {FormService} from '../../../shared/services/form/form.service';
import {Router} from '@angular/router';
import {FormToastService} from '../../../shared/services/toast/form-toast.service';

@Component({
  selector: 'inz-machine-tool-specification-layout',
  templateUrl: './machine-tool-specification-layout.component.html',
  styleUrls: ['./machine-tool-specification-layout.component.sass']
})
export class MachineToolSpecificationLayoutComponent implements OnInit {

  constructor(private formService: FormService,
              public router: Router,
              private formToastService: FormToastService,
              public machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private location: Location) {
  }

  ngOnInit() {
  }

  saveAndGoBack() {
    this.formService.updateFormRecord(
      this.machineToolSpecificationFormService.formData.formId,
      this.machineToolSpecificationFormService.formData.recordId,
      {
        values: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
      })
      .subscribe(_ => {
        this.location.back();
        this.formToastService.addedSuccess();
      });
  }

}
