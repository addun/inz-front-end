import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../../shared/services/form/form.service';
import {FormNotificationService} from '../../services/form-notification/form-notification.service';

enum InputType {
  text = 'text',
  number = 'number',
}

@Component({
  selector: 'inz-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.sass']
})
export class FormCreateComponent implements OnInit {
  folderId: string;
  formGroup: FormGroup;
  inputTypes = InputType;
  hasBeenSaved = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formNotificationService: FormNotificationService,
              private formService: FormService) {
  }

  get inputs(): FormArray {
    return (<FormArray>this.formGroup.controls['inputs']);
  }


  ngOnInit() {
    this.formGroup = this.buildForm();
    this.activatedRoute
      .queryParamMap
      .subscribe(params => {
        this.folderId = params.get('folderId');
      });
  }

  buildForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      inputs: new FormArray([this.createInputFormGroup()])
    });
  }

  createInputFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, validateEmail]),
      label: new FormControl('', Validators.required),
      type: new FormControl(this.inputTypes.text, Validators.required),
    });
  }

  addRow() {
    this.inputs.push(this.createInputFormGroup());
  }

  removeRow(index: number) {
    this.inputs.removeAt(index);
  }

  save() {
    const formData = this.formGroup.getRawValue();
    formData.folder = this.folderId;
    this.formService
      .addNewForm(formData)
      .subscribe(savedModel => {
        this.formNotificationService.formHasBeenSaved();
        this.hasBeenSaved = true;
      }, error => {
        this.formNotificationService.formExist();
      });
  }

}


function validateEmail(c: FormControl) {
  const slug_regex = /^[a-zA-Z_]+$/g;
  return slug_regex.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}
