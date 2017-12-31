import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';
import {Indexing} from '../../../shared/models/indexing.model';

@Component({
  selector: 'inz-indexing',
  templateUrl: './indexing.component.html',
  styleUrls: ['./indexing.component.sass']
})
export class IndexingComponent implements OnInit {
  formGroups: FormGroup[];
  generator = Indexing.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.indexing;
  }

  set model(model) {
    this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.indexing = model;
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
      return new FormGroup(Indexing.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new Indexing(form.value));
    });
  }

}
