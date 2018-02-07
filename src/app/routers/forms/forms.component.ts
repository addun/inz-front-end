import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MachineToolSpecificationFormService, MachineToolSpecificationService} from './machine-tool-specification/shared/services';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'inz-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {
  exGF: FormGroup;
  q: any;

  constructor(private router: Router,
              private machineToolSpecificationService: MachineToolSpecificationService,
              private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private location: Location) {
  }

  get formLabel() {
    return [
      {
        label: 'Jak masz na imię?',
        name: 'imie',
        value: 'asdfawef',
      },
      {
        label: 'Jak masz na imię?',
        name: 'wq',
        value: 'qq',
      },
      {
        label: 'Jak masz na imię?',
        name: 'dwqwd',
        value: '2123wdasdf',
      },
    ];
  }

  toFormGroup(questions: any[]) {
    const group: any = {};
    questions.forEach(q => {
      group[q.name] = new FormControl(q.value || '', Validators.required);
    });

    return new FormGroup(group);
  }

  ngOnInit() {
    this.q = this.formLabel;
    const qs = this.formLabel;
    this.exGF = this.toFormGroup(qs);
    console.log(this.exGF);
  }

  saveAndGoBack() {
    this.machineToolSpecificationService.updateMachineToolSpecification({
        id: this.machineToolSpecificationFormService.machineToolSpecificationId,
        data: this.machineToolSpecificationFormService.machineToolSpecificationForm.value
      }
    ).subscribe();
    this.location.back();
  }


}
