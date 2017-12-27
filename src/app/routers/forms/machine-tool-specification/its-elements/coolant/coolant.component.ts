import {Component, OnInit} from '@angular/core';
import {CoolantType} from '../../../shared/types/coolant-type.type';
import {MeansOfCoolantDelivery} from '../../../shared/types/means-of-coolant-delivery.type';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {Coolant} from '../../../shared/models/coolant.model';

@Component({
  selector: 'inz-coolant',
  templateUrl: './coolant.component.html',
  styleUrls: ['./coolant.component.sass']
})
export class CoolantComponent implements OnInit {
  formModelGroup: FormGroup;
  coolantType = CoolantType;
  meansOfCoolantDelivery = MeansOfCoolantDelivery;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): AbstractControl {
    return this.formModelGroup.controls['arrayModel'];
  }

  get model(): Coolant[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .coolant;
  }

  set model(coolants: Coolant[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .coolant = coolants;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = params['machineToolElementId'];
        this.formModelGroup = this.buildForm();
      });
  }

  buildForm(): FormGroup {
    return new FormGroup({
      arrayModel: new FormArray(this.loadForm())
    });
  }

  loadForm(): FormGroup[] {
    return this.model.map(model => {
      return new FormGroup(
        Coolant.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(Coolant.getFormControls()));
  }

  remove(index: number) {
    const control = <FormArray>this.modelForm;
    control.removeAt(index);
  }

  saveAll() {
    this.model = this.modelForm.value;
  }

}
