import {ToolHandlingUnit} from './tool-handling-unit.model';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToolStorageConfiguration} from '../types/tool-storage-configuration.type';
import {ToolAssembly} from './tool-assembly.model';

export class ToolMagazine extends ToolHandlingUnit {
  number_of_tools: string = null;
  random_access: boolean = null;
  diameter_full: string = null;
  diameter_empty: string = null;
  tool_length: string = null;
  tool_weight: string = null;
  storage_configuration?: ToolStorageConfiguration = null;
  tool_magazine_contents: ToolAssembly[] = [];

  constructor(model?) {
    super(model);
    Object.assign(this, model);
  }

  public static getFormControls(loadModel?): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new ToolMagazine();
    }

    const formControls = Object.assign(ToolHandlingUnit.getFormControls(loadModel), {
      number_of_tools: new FormControl(loadModel.number_of_tools, Validators.required),
      random_access: new FormControl(loadModel.random_access, Validators.required),
      diameter_full: new FormControl(loadModel.diameter_full, Validators.required),
      diameter_empty: new FormControl(loadModel.diameter_empty, Validators.required),
      tool_length: new FormControl(loadModel.tool_length, Validators.required),
      tool_weight: new FormControl(loadModel.tool_weight, Validators.required),
      storage_configuration: new FormControl(loadModel.storage_configuration),
      tool_magazine_contents: new FormArray([]),
    });

    loadModel.tool_magazine_contents.forEach(element => {
      formControls.tool_magazine_contents.push(new FormGroup(
        ToolAssembly.getFormControls(element)
      ));
    });

    return formControls;
  }
}
