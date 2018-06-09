import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../../shared/services/form/form.service';
import {FormControl, FormGroup} from '@angular/forms';
import {FormDTO, FormInputDTO, FormRecordDTO} from '../../shared/dto/form.dto';
import {FormNotificationService} from '../../services/form-notification/form-notification.service';

@Component({
  selector: 'inz-record-create',
  templateUrl: './record-create.component.html',
  styleUrls: ['./record-create.component.sass']
})
export class RecordCreateComponent implements OnInit {
  public form: FormDTO;
  public formInputs: FormInputDTO[] = [];
  public formGroup: FormGroup;
  private formId: string;
  private recordId: string;
  private navigateToNew = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formNotificationService: FormNotificationService,
              private formService: FormService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(value => {
        this.formId = value.get('formId');
        this.recordId = value.get('recordId');
        this.fetchFormInputsAndBuild();
      });
  }

  save() {
    const formData = this.formGroup.getRawValue();
    if (this.recordId) {
      this.updateFormRecord({_id: this.recordId, values: formData});
    } else {
      this.createFormRecord(formData);
    }

  }

  saveAndAddNext() {
    this.navigateToNew = true;
    this.save();
  }

  private createFormRecord(data) {
    this.formService.addFormRecord(this.formId, {values: data})
      .subscribe(value => {
        this.formNotificationService.recordHasBeenSaved();
        this.navigateToCorrectPage(value);
      });
  }

  private updateFormRecord(data: FormRecordDTO) {
    this.formService.updateFormRecord(this.formId, data._id, data)
      .subscribe(value => {
        this.formNotificationService.recordHasBeenSaved();
        this.navigateToCorrectPage(value);
      });
  }

  private navigateToCorrectPage(value) {
    if (this.navigateToNew) {
      this.router.navigate(['/forms', this.formId, 'records', 'add']);
      this.navigateToNew = false;
      this.formGroup.reset();
    } else {
      this.router.navigate(['/forms', this.formId, 'records', value._id, 'edit']);
      this.navigateToNew = false;
    }
  }

  private fetchFormInputsAndBuild() {
    this.formService.getForm(this.formId)
      .subscribe(value => {
        this.form = value;
        this.formInputs = this.form.inputs;
        if (this.recordId) {
          this.getFormRecordAndBuildForm();
        } else {
          this.buildForm();
        }
      });
  }

  private getFormRecordAndBuildForm() {
    this.formService.getFormRecord(this.formId, this.recordId)
      .subscribe(value => {
        this.buildForm(value);
      });

  }

  private buildForm(initValues: FormRecordDTO = {values: {}}) {
    const temp = {};
    this.formInputs.forEach(input => {
      const initValue = initValues.values[input.name] ? initValues.values[input.name] : null;
      temp[input.name] = new FormControl(initValue);
    });
    this.formGroup = new FormGroup(temp);
  }

}
