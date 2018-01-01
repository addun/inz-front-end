import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Pallet} from '../../../shared/models/pallet.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-pallet',
  templateUrl: './pallet.component.html',
  styleUrls: ['./pallet.component.sass']
})
export class PalletComponent implements OnInit {
  formGroups: FormGroup[];
  generator = Pallet.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.pallet;
  }

  set model(model) {
    this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.pallet = model;
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
      return new FormGroup(Pallet.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new Pallet(form.value));
    });
  }
}
