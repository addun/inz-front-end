import {Component, OnInit} from '@angular/core';
import {ToolAssembly} from '../../../../shared/models/tool-assembly.model';
import {ActivatedRoute} from '@angular/router';
import {FormArray} from '@angular/forms';
import {MachineToolSpecificationFormService} from '../../../shared/services';

@Component({
  selector: 'inz-tool-magazine-contents',
  templateUrl: './tool-magazine-contents.component.html',
  styleUrls: ['./tool-magazine-contents.component.sass']
})
export class ToolMagazineContentsComponent implements OnInit {
  toolMagazineContentForm: FormArray;
  generator = ToolAssembly.getFormControls;
  private machineToolElementId: number;
  private toolMagazineId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.parent.parent.params.subscribe(params => {

      this.machineToolElementId = +params['machineToolElementId'];
      this.activatedRoute.parent.params.subscribe(pppparams => {
        this.toolMagazineId = pppparams['toolMagazineId'];
        this.toolMagazineContentForm = this.machineToolSpecificationFormService.getToolMagazineContents(this.machineToolElementId, this.toolMagazineId);
      });

    });
  }
}
