import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormGroup} from '@angular/forms';
import {Installation} from '../../shared/models/installation.model';

@Component({
  selector: 'inz-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.sass']
})
export class InstallationComponent implements OnInit {
  installationForm: FormGroup;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get installation() {
    return this.machineToolSpecificationService.machine_tool_specification.installation;
  }

  set installation(installation: Installation) {
    this.machineToolSpecificationService.machine_tool_specification.installation = installation;
  }

  ngOnInit() {
    this.installationForm = this.buildForm();
  }

  saveForm() {
    this.installation = new Installation(this.installationForm.value);
  }

  private buildForm() {
    return new FormGroup(
      Installation.getFormControls(
        this.installation
      )
    );
  }
}
