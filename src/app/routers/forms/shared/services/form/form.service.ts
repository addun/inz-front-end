import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../core/api/api.service';
import {FormDTO, FormInputDTO, FormRecordDTO} from '../../dto/form.dto';
import {Observable} from 'rxjs';

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

  getFormInputs(formId: string): Observable<FormInputDTO[]> {
    return this.apiService.get(`${this.formURL}${formId}/inputs/`);
  }

  getFormRecords(formId: string): Observable<FormRecordDTO[]> {
    return this.apiService.get(`${this.formURL}${formId}/records/`);
  }

  addNewForm(form: FormDTO): Observable<FormDTO> {
    return this.apiService.post(`${this.formURL}`, form);
  }

  addFormRecord(formId: string, data: FormRecordDTO): Observable<FormRecordDTO> {
    return this.apiService.post(`${this.formURL}${formId}/records/`, data);
  }

  removeFormRecord(formId: string, recordId: string) {
    return this.apiService.delete(`${this.formURL}${formId}/records/${recordId}/`);
  }

  getFormRecord(formId: string, recordId: string): Observable<FormRecordDTO> {
    return this.apiService.get(`${this.formURL}${formId}/records/${recordId}/`);
  }

  updateFormRecord(formId: string, recordId: string, recordData: FormRecordDTO) {
    return this.apiService.put(`${this.formURL}${formId}/records/${recordId}/`, recordData);
  }
}
