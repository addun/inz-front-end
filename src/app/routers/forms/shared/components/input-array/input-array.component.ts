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
    const clone = new FormControl();
    (<FormArray>this.form.controls[this.controlName]).push(clone);
  }

  removeRow(i: number) {
    (<FormArray>this.form.controls[this.controlName]).removeAt(i);
  }
}
