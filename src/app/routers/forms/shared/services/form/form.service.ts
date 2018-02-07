import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../core/api/api.service';

@Injectable()
export class FormService {
  private formURL = 'forms/';

  constructor(private apiService: ApiService) {
  }

  addModel(model) {
    return this.apiService.post(`${this.formURL}`, model);
  }

}
