import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Turret} from '../../../shared/models/turret.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.sass']
})
export class TurretComponent implements OnInit {
  formGroups: FormGroup[];
  generator = Turret.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.turret;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.turret = model;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = +params['machineToolElementId'];
        this.formGroups = this.buildForms();
      });
  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(Turret.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      console.log(form.value);
      this.model.push(new Turret(form.value));
    });
  }

}
