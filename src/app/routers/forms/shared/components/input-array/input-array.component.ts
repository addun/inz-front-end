import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl} from '@angular/forms';
import {InputComponent} from '../input/input.component';

@Component({
  selector: 'inz-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.sass']
})
export class InputArrayComponent extends InputComponent implements OnInit {
  @Input() labelPlural: string;
  formControls: AbstractControl[];

  ngOnInit() {
    super.ngOnInit();
    this.formControls = (<FormArray>this.form.controls[this.controlName]).controls;
  }

  addNewRow() {
    const clone = new FormControl(
      null,
      this.formControls[0] ? this.formControls[0].validator : null,
      this.formControls[0] ? this.formControls[0].asyncValidator : null,
    );
    (<FormArray>this.form.controls[this.controlName]).push(clone);
    // this.formControls.push(clone);
    console.log(this.form.controls[this.controlName]);
  }

  removeRow(i: number) {
    this.formControls.splice(i, 1);
  }
}
