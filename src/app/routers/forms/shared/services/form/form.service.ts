import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../core/api/api.service';
import {Input} from '../../models/input.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FormService {
  private formURL = 'forms/';

  constructor(private apiService: ApiService) {
  }

  addModel(model) {
    return this.apiService.post(`${this.formURL}`, model);
  }

  getInputs(formId: string): Observable<Input[]> {
    return this.apiService.get(`${this.formURL}${formId}/inputs`);
  }

  saveData(formId: string, data: any): Observable<any> {
    return this.apiService.post(`${this.formURL}${formId}/data`, data);
  }

}
