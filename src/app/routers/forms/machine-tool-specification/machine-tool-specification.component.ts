import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationFormService} from './shared/services';
import {ActivatedRoute} from '@angular/router';
import {FormService} from '../shared/services/form/form.service';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass'],
})
export class MachineToolSpecificationComponent implements OnInit {
  machineToolSpecificationForm: FormGroup;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private formService: FormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe((params: { form: string; record?: string }) => {
        if (!this.machineToolSpecificationFormService.formData) {
          this.machineToolSpecificationFormService.formData = params;
        }

        if (params.record) {
          this.formService.getRecord(params.record).subscribe(dto => {
            this.machineToolSpecificationFormService.loadMachineToolSpecificationFormFromModel(dto.values);
            this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
          });
        } else if (params.form) {
          this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
        }
      });
  }

  onSave() {
    if (this.machineToolSpecificationFormService.formData.record) {
      this.formService.updateRecord({
        _id: this.machineToolSpecificationFormService.formData.record,
        values: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
      })
        .subscribe(response => {
          console.log('updated');
        });
    } else {
      this.formService
        .addFormRecord(this.machineToolSpecificationFormService.formData.form, {
          values: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
        })
        .subscribe(saved => {
          console.log(saved);
        });
    }
  }

}
