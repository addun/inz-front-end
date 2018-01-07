import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecification} from '../shared/models/machine-tool-specification.model';
import {MachineToolSpecificationService} from './shared/services/machine-tool-specification/machine-tool-specification.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'inz-machine-tool-specification',
  templateUrl: './machine-tool-specification.component.html',
  styleUrls: ['./machine-tool-specification.component.sass']
})
export class MachineToolSpecificationComponent implements OnInit {
  machineToolSpecificationForm: FormGroup;
  schema;
  private machineToolSpecificationId: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.activatedRoute.paramMap
    //   .subscribe(params => {
    //     this.machineToolSpecificationId = +params.get('machineToolSpecificationId');
        this.loadMachineToolSpecification();
      // });
  }

  save() {
    const values = this.machineToolSpecificationForm.value;

    this.machineToolSpecificationService
      .machine_tool_specification = Object.assign(
      this.machineToolSpecificationService.machine_tool_specification, values
    );

    this.schema = this.machineToolSpecificationService.machine_tool_specification;

    this.machineToolSpecificationService
      .addMachineToolSpecification(this.schema)
      .subscribe(response => {
        console.log(response);
      });

  }

  private loadMachineToolSpecification() {
    // this.machineToolSpecificationService
    //   .getMachineToolSpecification(this.machineToolSpecificationId)
    //   .subscribe(model => {
    //     this.machineToolSpecificationService.machine_tool_specification = new MachineToolSpecification(JSON.parse(model.data));
        this.machineToolSpecificationForm = this.buildForm();
      // });
  }

  private buildForm() {
    return this.machineToolSpecificationForm = new FormGroup(
      MachineToolSpecification.getFormControls(
        this.machineToolSpecificationService.machine_tool_specification
      )
    );
  }


}
