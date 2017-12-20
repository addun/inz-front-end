import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MachineToolSpecificationService} from '../shared/services/machine-tool-specification/machine-tool-specification.service';
import {Location} from '../../shared/models/location.model';

@Component({
  selector: 'inz-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  locationForm: FormGroup;

  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get location() {
    return this.machineToolSpecificationService.machine_tool_specification.location;
  }

  set location(deviceId: Location) {
    this.machineToolSpecificationService.machine_tool_specification.location = deviceId;
  }

  ngOnInit() {
    this.locationForm = this.buildForm();
  }

  saveForm() {
    this.location = new Location(this.locationForm.value);
  }

  private buildForm() {
    return new FormGroup(
      Location.getFormControls(
        this.location
      )
    );
  }
}
