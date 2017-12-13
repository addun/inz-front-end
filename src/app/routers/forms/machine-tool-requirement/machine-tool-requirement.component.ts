import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MachineToolRequirementService} from '../shared/services/machine-tool-requirement/machine-tool-requirement.service';
import {MachineToolRequirement} from '../shared/models/machine-tool-requirement';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormToastService} from '../shared/services/toast/form-toast.service';
import {TreeService} from '../../tree/services/tree/tree.service';
import {Directory} from '../../tree/models/directory.model';

@Component({
  selector: 'inz-machine-tool-requirement',
  templateUrl: './machine-tool-requirement.component.html',
  styleUrls: ['./machine-tool-requirement.component.sass']
})
export class MachineToolRequirementComponent implements OnInit {
  nodes: Directory[];
  machineToolRequirementsForm: FormGroup;

  constructor(private machineToolRequirementService: MachineToolRequirementService,
              private fb: FormBuilder,
              private formToastService: FormToastService,
              private router: Router,
              private treeService: TreeService,
              private activatedRoute: ActivatedRoute) {
    this.buildForm(new MachineToolRequirement());
  }

  ngOnInit() {
    this.getNodes();

    this.activatedRoute.params.subscribe(params => {
      const machineToolRequirementId = params['machineToolRequirementId'];
      if (machineToolRequirementId) {
        this.buildMachineToolRequirementForm(machineToolRequirementId);
      }
    });

    this.activatedRoute.queryParams.subscribe();
  }

  onSubmit() {
    if (this.machineToolRequirementsForm.valid) {
      const model = this.machineToolRequirementsForm.value;
      console.log(model);
      if (model.id) {
        this.updateMachineToolRequirement(model);
      } else {
        this.saveMachineToolRequirement(model);
      }
    }
  }

  updateNode(nodeId: number) {
    this.treeService
      .addMachineTooRequirementToTag(nodeId, this.machineToolRequirementsForm.value.id)
      .subscribe(resposne => {
        this.formToastService.updateSuccess();
      });
  }

  private getNodes() {
    this.treeService
      .getNodes()
      .subscribe(nodes => this.nodes = nodes);
  }

  private saveMachineToolRequirement(model: MachineToolRequirement) {
    this.machineToolRequirementService
      .addMachineToolRequirement(model)
      .subscribe(addedModel => {
        this.formToastService.addedSuccess();
        this.router.navigate(['../', addedModel.id, 'change'], {relativeTo: this.activatedRoute});
      }, error => {
        this.formToastService.errorInRequest();
      });
  }

  private updateMachineToolRequirement(model: MachineToolRequirement) {
    this.machineToolRequirementService
      .updateMachineToolRequirement(model)
      .subscribe(updatedModel => {
        this.formToastService.updateSuccess();
      }, error => {
        this.formToastService.errorInRequest();
      });
  }

  private buildForm(model: MachineToolRequirement) {
    this.machineToolRequirementsForm = this.fb.group({
      id: [model.id],
      description: [model.description, Validators.required],
      number_of_tools_in_tool_magazine: model.number_of_tools_in_tool_magazine,
      automatically_pallet_changeable: [model.automatically_pallet_changeable, Validators.required],
    });
  }

  private buildMachineToolRequirementForm(id: number) {
    this.machineToolRequirementService
      .getMachineToolRequirement(id)
      .subscribe(model => {
        this.buildForm(model);
      });
  }
}

