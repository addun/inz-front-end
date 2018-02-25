import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {StandardMachiningProcess} from '../shared/models/standard-machining-process.model';
import {MachineToolSpecificationFormService} from '../shared/services';

@Component({
  selector: 'inz-standard-machining-process',
  templateUrl: './standard-machining-process.component.html',
  styleUrls: ['./standard-machining-process.component.sass']
})
export class StandardMachiningProcessComponent implements OnInit {
  formGroups: FormArray;
  generator = StandardMachiningProcess.getFormControls

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService) {
  }


  ngOnInit(): void {
    this.formGroups = this.machineToolSpecificationFormService.standardMachiningProcessForm;
  }


}
