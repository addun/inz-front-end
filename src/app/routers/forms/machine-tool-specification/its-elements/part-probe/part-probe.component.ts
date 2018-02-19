import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormGroup} from '@angular/forms';
import {PartProbe} from '../../../shared/models/part-probe.model';
import {SensorDimensionality} from '../../../shared/types/sensor-dimensionality.type';
import {ProbeType} from '../../../shared/types/probe-type.type';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-part-probe',
  templateUrl: './part-probe.component.html',
  styleUrls: ['./part-probe.component.sass']
})
export class PartProbeComponent implements OnInit {
  sensorDimensionality = SensorDimensionality;
  probeType = ProbeType;
  partProbeForm: FormArray;
  generator = PartProbe.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.machineToolElementId = +params['machineToolElementId'];
        this.partProbeForm = this.machineToolSpecificationFormService.getPartProbes(this.machineToolElementId);
      });
  }
}
