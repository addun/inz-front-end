import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {Tailstock} from '../../../shared/models/tailstock.model';

@Component({
  selector: 'inz-tailstock',
  templateUrl: './tailstock.component.html',
  styleUrls: ['./tailstock.component.sass']
})
export class TailstockComponent implements OnInit {
  tailstockForm: FormGroup;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get tailstocks(): AbstractControl {
    return this.tailstockForm.controls['tailstocks'];
  }

  get barFeeders(): Tailstock[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tailstock;
  }

  set barFeeders(tailstock: Tailstock[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tailstock = tailstock;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = params['machineToolElementId'];
        this.tailstockForm = this.buildTailstockForm();
      });
  }

  buildTailstockForm(): FormGroup {
    return new FormGroup({
      tailstocks: new FormArray(this.loadTailstockForm())
    });
  }

  loadTailstockForm(): FormGroup[] {
    return this.barFeeders.map(model => {
      return new FormGroup(
        Tailstock.getFormControls(model)
      );
    });
  }

  addTailstock() {
    const control = <FormArray>this.tailstocks;
    control.push(new FormGroup(Tailstock.getFormControls()));
  }

  removeTailstock(index: number) {
    const control = <FormArray>this.tailstocks;
    control.removeAt(index);
  }

  saveAll() {
    this.barFeeders = this.tailstocks.value;
  }

}
