import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../core/api/api.service';
import {FormDTO, FormInput, FormRecordDTO} from '../../dto/form.dto';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FormService {
  private formURL = 'forms/';

  constructor(private apiService: ApiService) {
  }

  getForms(): Observable<FormDTO[]> {
    return this.apiService.get(`${this.formURL}`);
  }

  getForm(formId: string): Observable<FormDTO> {
    return this.apiService.get(`${this.formURL}${formId}/`);
  }

  getFormInputs(formId: string): Observable<FormInput[]> {
    return this.apiService.get(`${this.formURL}${formId}/inputs/`);
  }

  getFormRecords(formId: string): Observable<FormInput[]> {
    return this.apiService.get(`${this.formURL}${formId}/records/`);
  }

  addNewForm(form: FormDTO) {
    return this.apiService.post(`${this.formURL}`, form);
  }

  addFormRecord(formId: string, data: FormRecordDTO): Observable<any> {
    return this.apiService.post(`${this.formURL}${formId}/records/`, data);
  }

}
