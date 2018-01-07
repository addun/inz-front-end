import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ToolChanger} from '../../../shared/models/tool-changer.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-tool-changer',
  templateUrl: './tool-changer.component.html',
  styleUrls: ['./tool-changer.component.sass']
})
export class ToolChangerComponent implements OnInit {
  toolChangerForm: FormArray;
  generator = ToolChanger.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(params => {
      this.machineToolElementId = +params['machineToolElementId'];
      this.toolChangerForm = this.machineToolSpecificationFormService.getToolChangers(this.machineToolElementId);
    });
  }

}
