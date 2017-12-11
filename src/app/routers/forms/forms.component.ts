import {Component, OnInit} from '@angular/core';
import {MachineToolRequirement} from './shared/models/machine-tool-requirement';
import {MachineToolRequirementService} from './shared/services/machine-tool-requirement/machine-tool-requirement.service';
import {FormToastService} from './shared/services/toast/form-toast.service';
import {TreeService} from '../tree/services/tree/tree.service';
import {ActivatedRoute} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'inz-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

  constructor(private machineToolRequirementService: MachineToolRequirementService,
              private treeService: TreeService,
              private activatedRoute: ActivatedRoute,
              private formToastService: FormToastService) {
  }

  ngOnInit() {
  }

  save(formGroup: FormGroup) {
    console.log(formGroup);
    this.machineToolRequirementService
      .addMachineToolRequirement(formGroup.value)
      .subscribe((addedElement => {
        this.formToastService.addedSuccess();
        formGroup.reset();
        let tagId = 0;
        this.activatedRoute.queryParams.subscribe(params => {
          tagId = params['tag'];

          this.addMachineToolRequirementToTag(tagId, addedElement.id);
        });
      }));
  }


  addMachineToolRequirementToTag(tagId: number, machineToolRequirementId: number) {
    this.treeService
      .addMachineTooRequirementToTag(tagId, machineToolRequirementId)
      .subscribe(response => {
        this.formToastService.addedSuccess();
      });
  }

}
