import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {PartProbe} from '../../../shared/models/part-probe.model';
import {SensorDimensionality} from '../../../shared/types/sensor-dimensionality.type';
import {ProbeType} from '../../../shared/types/probe-type.type';

@Component({
  selector: 'inz-part-probe',
  templateUrl: './part-probe.component.html',
  styleUrls: ['./part-probe.component.sass']
})
export class PartProbeComponent implements OnInit {
  formModelGroup: FormGroup;
  sensorDimensionality = SensorDimensionality;
  probeType = ProbeType;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): AbstractControl {
    return this.formModelGroup.controls['arrayModel'];
  }

  get model(): PartProbe[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .part_probes;
  }

  set model(partProbes: PartProbe[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .part_probes = partProbes;
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
        PartProbe.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(PartProbe.getFormControls()));
  }

  remove(index: number) {
    const control = <FormArray>this.modelForm;
    control.removeAt(index);
  }

  saveAll() {
    this.model = this.modelForm.value;
  }
}
