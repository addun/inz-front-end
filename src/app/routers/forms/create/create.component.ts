import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../shared/services/form/form.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  folderId: string;
  formGroup: FormGroup;
  inputTypes = InputType;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
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
        this.folderId = params.get('folder');
      });
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
    const formData = this.formGroup.value;
    formData.folder = this.folderId;
    this.formService
      .addNewForm(formData)
      .subscribe(savedModel => {
        this.router.navigate(['forms', savedModel._id, 'add-data']);
      })
    ;
  }

}
