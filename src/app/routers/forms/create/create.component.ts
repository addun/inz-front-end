import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../shared/services/form/form.service';

enum InputType {
  text = 'text',
  number = 'number',
}

@Component({
  selector: 'inz-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  formGroup: FormGroup;
  inputTypes = InputType;

  constructor(private formService: FormService) {
  }

  get inputs(): FormArray {
    return (<FormArray>this.formGroup.controls['inputs']);
  }

  ngOnInit() {
    this.formGroup = this.buildForm();
  }

  buildForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      inputs: new FormArray([])
    });
  }

  createInputFormGroup() {
    return {
      name: new FormControl('', Validators.required),
      label: new FormControl('', Validators.required),
      type: new FormControl(null, Validators.required),
    };
  }

  save() {
    this.formService
      .addModel(this.formGroup.value)
      .subscribe(savedModel => {
        this.formGroup.reset();
      })
    ;
  }

}
