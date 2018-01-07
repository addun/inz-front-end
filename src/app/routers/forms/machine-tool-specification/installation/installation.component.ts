import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationFormService} from '../shared/services';

@Component({
  selector: 'inz-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.sass']
})
export class InstallationComponent implements OnInit {
  installationForm: FormGroup;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService) {
  }

  ngOnInit() {
    this.installationForm = this.machineToolSpecificationFormService.installationForm;
  }


}
