import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {FormGroup} from '@angular/forms';
import {PartProbe} from '../../../shared/models/part-probe.model';
import {SensorDimensionality} from '../../../shared/types/sensor-dimensionality.type';
import {ProbeType} from '../../../shared/types/probe-type.type';

@Component({
  selector: 'inz-part-probe',
  templateUrl: './part-probe.component.html',
  styleUrls: ['./part-probe.component.sass']
})
export class PartProbeComponent implements OnInit {
  sensorDimensionality = SensorDimensionality;
  probeType = ProbeType;
  formGroups: FormGroup[];
  generator = PartProbe.getFormControls;
  private activeArrayIndex: number;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService,
              private activatedRoute: ActivatedRoute) {
  }

  get model() {
    return this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.part_probes;
  }

  set model(model) {
    this.machineToolSpecificationService.machine_tool_specification.its_elements[this.activeArrayIndex].capabilities.part_probes = model;
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
      return new FormGroup(PartProbe.getFormControls(capability));
    });
  }

  save() {
    this.model = [];
    this.formGroups.forEach(form => {
      this.model.push(new PartProbe(form.value));
    });
  }
}
