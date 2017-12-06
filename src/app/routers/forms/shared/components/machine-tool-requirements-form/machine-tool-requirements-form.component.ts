import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormToastService} from '../../services/toast/form-toast.service';
import {MachineToolRequirementService} from '../../services/machine-tool-requirement/machine-tool-requirement.service';

@Component({
  selector: 'inz-machine-tool-requirements-form',
  templateUrl: './machine-tool-requirements-form.component.html',
  styleUrls: ['./machine-tool-requirements-form.component.sass']
})
export class MachineToolRequirementsFormComponent implements OnInit {
  machineToolRequirementsForm: FormGroup;

  constructor(private fb: FormBuilder,
              private machineToolRequirementsService: MachineToolRequirementService,
              private formToastService: FormToastService) {
    this.buildForm();
  }

  buildForm() {
    this.machineToolRequirementsForm = this.fb.group({
      description: ['', Validators.required],
      number_of_tools_in_tool_magazine: 0,
      automatically_pallet_changeable: [false, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.machineToolRequirementsForm.valid) {

      this.machineToolRequirementsService
        .addMachineToolRequirement(this.machineToolRequirementsForm.value)
        .subscribe((addedElement => {
          this.machineToolRequirementsForm.reset();
          this.formToastService.addedSuccess();
        }));
    }

  }

}
