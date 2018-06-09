import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationFormService} from './shared/services';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../shared/services/form/form.service';
import {FormToastService} from '../shared/services/toast/form-toast.service';

enum State {
  CREATE,
  UPDATE
}

@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass'],
})
export class MachineToolSpecificationComponent implements OnInit {
  public machineToolSpecificationForm: FormGroup;
  private formId: string | null;
  private recordId: string | null;
  private state: State = null;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private formService: FormService,
              private router: Router,
              private formToastService: FormToastService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    const params = this.activatedRoute.snapshot.queryParamMap;

    this.formId = params.get('formId');
    this.recordId = params.get('recordId');
    if (this.formId && this.recordId) {
      this.state = State.UPDATE;
      this.fetchFormToUpdate();
      this.updateFormData();
    } else if (this.formId) {
      this.state = State.CREATE;
      this.createForm({
        description: 'Default description'
      });
    } else {
      console.error('Incorrect params');
    }
  }

  onSave() {
    if (this.state === State.CREATE) {
      this.formService.addFormRecord(this.formId, {
        values: this.machineToolSpecificationForm.getRawValue()
      }).subscribe(response => {
        this.state = State.UPDATE;
        this.recordId = response._id;
        this.updateQueries();
        this.updateFormData();
      });
    } else if (this.state === State.UPDATE) {
      this.formService.updateFormRecord(this.formId, this.recordId, {
        values: this.machineToolSpecificationForm.getRawValue()
      }).subscribe(response => {
        this.formToastService.updateSuccess();
      });
    }
  }

  private fetchFormToUpdate() {
    this.formService.getFormRecord(this.formId, this.recordId)
      .subscribe(response => {
        this.createForm(response.values);
      });
  }

  private createForm(model?) {
    this.machineToolSpecificationFormService.loadMachineToolSpecificationFormFromModel(model);
    this.machineToolSpecificationForm = this.machineToolSpecificationFormService.machineToolSpecificationForm;
    if (this.state === State.CREATE) {
      this.onSave();
    }
  }

  private updateQueries() {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        formId: this.formId,
        recordId: this.recordId
      }
    });
  }

  private updateFormData() {
    this.machineToolSpecificationFormService.formData = {
      formId: this.formId,
      recordId: this.recordId
    };
  }

}
