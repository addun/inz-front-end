import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {MachineToolElement} from '../../shared/models/machine-tool-element.model';
import {MachineToolSpecificationFormService} from '../shared/services';

@Component({
  selector: 'inz-its-elements',
  templateUrl: './its-elements.component.html',
  styleUrls: ['./its-elements.component.sass']
})
export class ItsElementsComponent implements OnInit {
  machineToolElementsForms: FormArray;
  generator = MachineToolElement.getFormControls;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService) {
  }

  ngOnInit(): void {
    this.machineToolElementsForms = this.machineToolSpecificationFormService.itsElements;
  }


}
