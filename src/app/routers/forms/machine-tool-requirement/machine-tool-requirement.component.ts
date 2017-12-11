import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MachineToolRequirementService} from '../shared/services/machine-tool-requirement/machine-tool-requirement.service';
import {MachineToolRequirement} from '../shared/models/machine-tool-requirement';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormToastService} from '../shared/services/toast/form-toast.service';

@Component({
  selector: 'inz-machine-tool-requirement',
  templateUrl: './machine-tool-requirement.component.html',
  styleUrls: ['./machine-tool-requirement.component.sass']
})
export class MachineToolRequirementComponent implements OnInit {
  machineToolRequirementsForm: FormGroup;
  model: MachineToolRequirement = new MachineToolRequirement();

  constructor(private machineToolRequirementService: MachineToolRequirementService,
              private fb: FormBuilder,
              private formToastService: FormToastService,
              private activatedRoute: ActivatedRoute) {
    this.model = new MachineToolRequirement();
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(params => {
        const machineToolRequirementId = params['machineToolRequirementId'];
        if (machineToolRequirementId) {
          this.getMachineToolRequirement(machineToolRequirementId);
        }
      });
  }

  onSubmit() {
    if (this.machineToolRequirementsForm.valid) {
      this.machineToolRequirementService
        .updateMachineToolRequirement(this.machineToolRequirementsForm.value)
        .subscribe(model => {
          this.formToastService.updateSuccess();
        }, error => {
          this.formToastService.errorInRequest();
        });
    }

  }

  private buildForm() {
    this.machineToolRequirementsForm = this.fb.group({
      id: [this.model.id],
      description: [this.model.description, Validators.required],
      number_of_tools_in_tool_magazine: this.model.number_of_tools_in_tool_magazine,
      automatically_pallet_changeable: [this.model.automatically_pallet_changeable, Validators.required],
    });
  }

  private getMachineToolRequirement(id: number) {
    this.machineToolRequirementService
      .getMachineToolRequirement(id)
      .subscribe(model => {
        this.model = model;
        this.buildForm();
      });
  }

}

