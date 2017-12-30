import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {Collet} from '../../../shared/models/collet.model';

@Component({
  selector: 'inz-collet',
  templateUrl: './collet.component.html',
  styleUrls: ['./collet.component.sass']
})
export class ColletComponent implements OnInit {
  formGroups: FormGroup[];
  generator = Collet.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.collets;
  }

  set model(model) {
    this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.collets = model;
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
      return new FormGroup(Collet.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new Collet(form.value));
    });
  }
}
