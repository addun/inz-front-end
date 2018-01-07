import {Component, OnInit} from '@angular/core';
import {MachineToolSpecificationService} from './machine-tool-specification/shared/services/machine-tool-specification/machine-tool-specification.service';

@Component({
  selector: 'inz-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  constructor(private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get schema() {
    return this.machineToolSpecificationService.machine_tool_specification;
  }

  ngOnInit() {

  }


}
