import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RectangularWorkTable} from '../../../shared/models/rectangular-work-table.model';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-rectangular-work-table',
  templateUrl: './rectangular-work-table.component.html',
  styleUrls: ['./rectangular-work-table.component.sass']
})
export class RectangularWorkTableComponent implements OnInit {
  formGroups: FormGroup[];
  generator = RectangularWorkTable.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.rectangular_work_tables;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.rectangular_work_tables = model;
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
      return new FormGroup(RectangularWorkTable.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new RectangularWorkTable(form.value));
    });
  }
}
