import {Component, OnInit} from '@angular/core';
import {CoolantType} from '../../../shared/types/coolant-type.type';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {Coolant} from '../../../shared/models/coolant.model';
import {MeansOfCoolantDelivery} from '../../../shared/types/means-of-coolant-delivery.type';

@Component({
  selector: 'inz-coolant',
  templateUrl: './coolant.component.html',
  styleUrls: ['./coolant.component.sass']
})
export class CoolantComponent implements OnInit {
  formGroups: FormGroup[];
  generator = Coolant.getFormControls;
  coolantType = CoolantType;
  meansOfCoolantDelivery = MeansOfCoolantDelivery;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.coolant;
  }

  set model(model) {
    this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.coolant = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = +params['machineToolElementId'];
        this.formGroups = this.buildForms();
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(Coolant.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new Coolant(form.value));
    });
  }

}
