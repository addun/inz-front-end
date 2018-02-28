import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationFormService} from './shared/services';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../shared/services/form/form.service';
import {FormToastService} from '../shared/services/toast/form-toast.service';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass'],
})
export class MachineToolSpecificationComponent implements OnInit {
  machineToolSpecificationForm: FormGroup;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private formService: FormService,
              private router: Router,
              private formToastService: FormToastService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe((params: { form: string; record?: string }) => {

          if (this.machineToolSpecificationFormService.formData.form !== params.form
            || this.machineToolSpecificationFormService.formData.record !== params.record) {
            this.machineToolSpecificationFormService.formData = params;
            if (params.record) {
              this.formService.getRecord(params.record).subscribe(dto => {
                this.machineToolSpecificationFormService.loadMachineToolSpecificationFormFromModel(dto.values);
                this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
              });
            } else {
              this.machineToolSpecificationFormService.loadMachineToolSpecificationFormFromModel({
                description: 'Empty'
              });
              this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
              this.onSave();
            }
          } else if (this.machineToolSpecificationFormService.formData.form === params.form
            && this.machineToolSpecificationFormService.formData.record === params.record) {
            this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
          }
        }
      );
  }

  onSave() {
    if (this.machineToolSpecificationFormService.formData.record) {
      this.formService.updateRecord({
        _id: this.machineToolSpecificationFormService.formData.record,
        values: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
      })
        .subscribe(response => {
          this.formToastService.addedSuccess();
        });
    } else {
      this.formService
        .addFormRecord(this.machineToolSpecificationFormService.formData.form, {
          values: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
        })
        .subscribe(saved => {
          this.router.navigate([], {
            queryParams: {
              record: saved._id,
              form: this.machineToolSpecificationFormService.formData.form
            }
          });
          this.formToastService.addedSuccess();
        });
    }
  }

}
