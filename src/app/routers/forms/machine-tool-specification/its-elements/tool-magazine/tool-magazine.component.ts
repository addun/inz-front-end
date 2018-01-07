import {Component, OnInit} from '@angular/core';
import {FormArray} from '@angular/forms';
import {ToolMagazine} from '../../../shared/models/tool-magazine.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../shared/services';

@Component({
  selector: 'inz-tool-magazine',
  templateUrl: './tool-magazine.component.html',
  styleUrls: ['./tool-magazine.component.sass']
})
export class ToolMagazineComponent implements OnInit {
  toolMagazineForm: FormArray;
  generator = ToolMagazine.getFormControls;
  private machineToolElementId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.parent.params.subscribe(params => {
      this.machineToolElementId = +params['machineToolElementId'];
      this.toolMagazineForm = this.machineToolSpecificationFormService.getToolMagazines(this.machineToolElementId);
    });
  }
}
