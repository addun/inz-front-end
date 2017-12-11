import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MachineToolRequirement} from '../../models/machine-tool-requirement';

@Component({
  selector: 'inz-machine-tool-requirements-form',
  templateUrl: './machine-tool-requirements-form.component.html',
  styleUrls: ['./machine-tool-requirements-form.component.sass']
})
export class MachineToolRequirementsFormComponent implements OnInit {
  @Input() model: MachineToolRequirement;
  @Output() send: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  machineToolRequirementsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  buildForm() {
    this.machineToolRequirementsForm = this.fb.group({
      description: [this.model.description, Validators.required],
      number_of_tools_in_tool_magazine: this.model.number_of_tools_in_tool_magazine,
      automatically_pallet_changeable: [this.model.automatically_pallet_changeable, Validators.required],
    });
  }

  ngOnInit() {
    if (!this.model) {
      this.model = new MachineToolRequirement();
    }
    this.buildForm();
  }

  onSubmit() {
    if (this.machineToolRequirementsForm.valid) {
      this.send.emit(this.machineToolRequirementsForm);
    }

  }

}
