import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationFormService} from './machine-tool-specification/shared/services/machine-tool-specification-form/machine-tool-specification-form.service';

@Component({
  selector: 'inz-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService) {
  }

  get schema() {
    return this.machineToolSpecificationFormService.machineToolSpecificationForm.value;
  }

  ngOnInit() {

  }


}
