import {Component, OnInit} from '@angular/core';
import {CircularWorkTable} from '../../../shared/models/circular-work-table.model';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-circular-work-table',
  templateUrl: './circular-work-table.component.html',
  styleUrls: ['./circular-work-table.component.sass']
})
export class CircularWorkTableComponent implements OnInit {
  formGroups: FormGroup[];
  generator = CircularWorkTable.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.circular_work_tables;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.circular_work_tables = model;
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
      return new FormGroup(CircularWorkTable.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new CircularWorkTable(form.value));
    });
  }
}
