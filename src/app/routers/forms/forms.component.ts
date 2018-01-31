import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MachineToolSpecificationFormService, MachineToolSpecificationService} from './machine-tool-specification/shared/services';

@Component({
  selector: 'inz-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  constructor(private router: Router,
              private machineToolSpecificationService: MachineToolSpecificationService,
              private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private location: Location) {
  }


  ngOnInit() {
  }

  saveAndGoBack() {
    this.machineToolSpecificationService.updateMachineToolSpecification({
        id: this.machineToolSpecificationFormService.machineToolSpecificationId,
        data: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
      }
    ).subscribe();
    this.location.back();
  }


}
