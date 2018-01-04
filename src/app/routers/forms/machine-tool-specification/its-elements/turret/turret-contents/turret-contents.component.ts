import {Component, OnInit} from '@angular/core';
import {ToolAssembly} from '../../../../shared/models/tool-assembly.model';
import {MachineToolSpecificationService} from '../../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'inz-turret-contents',
  templateUrl: './turret-contents.component.html',
  styleUrls: ['./turret-contents.component.sass']
})
export class TurretContentsComponent implements OnInit {
  formGroups: FormGroup[];
  generator = ToolAssembly.getFormControls;
  private machineToolElementId: number;
  private turretIdIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.machineToolElementId]
      .capabilities.turret[this.turretIdIndex].turret_contents;
  }

  set model(model) {
    this.machineToolSpecificationService
      .machine_tool_specification.its_elements[this.machineToolElementId]
      .capabilities.turret[this.turretIdIndex].turret_contents = model;
  }

  ngOnInit(): void {
    this.activatedRoute.parent.paramMap
      .subscribe(paramMap => {
        this.turretIdIndex = +paramMap.get('turretId');

        this.activatedRoute
          .parent.parent.parent
          .paramMap.subscribe(pparamMap => {
          this.machineToolElementId = +pparamMap.get('machineToolElementId');
          this.formGroups = this.buildForms();
        });

      });


  }

  buildForms(): FormGroup[] {
    return this.model.map(capability => {
      return new FormGroup(ToolAssembly.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new ToolAssembly(form.value));
    });
  }

}
