import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationFormService} from './shared/services';
import {MachineToolSpecificationService} from './shared/services/machine-tool-specification/machine-tool-specification.service';
import {ApiToastService} from '../../../core/toast/api-toast.service';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass'],
})
export class MachineToolSpecificationComponent implements OnInit {
  machineToolSpecificationForm: FormGroup;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private apiToastService: ApiToastService,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  ngOnInit() {
    this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
  }

  onSave() {
    this.machineToolSpecificationService.updateMachineToolSpecification({
        id: this.machineToolSpecificationFormService.machineToolSpecificationId,
        data: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
      }
    ).subscribe();
  }

}
