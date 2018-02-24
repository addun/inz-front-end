import {Injectable} from '@angular/core';
import {ApiService} from '../../../../../core/api/api.service';
import {FormDTO, FormInputDTO, FormRecordDTO} from '../../dto/form.dto';
import {Observable} from 'rxjs/Observable';
import {HttpParams} from '@angular/common/http';

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

  getFormByFolder(folderId: string): Observable<FormDTO[]> {
    const params = new HttpParams().set('folder', folderId);
    return this.apiService.get(`${this.formURL}`, {
      params: params
    });
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

  removeRecord(recordId: string) {
    return this.apiService.delete(`${this.formURL}records/${recordId}/`);
  }

  getRecord(recordId: string): Observable<FormRecordDTO> {
    return this.apiService.get(`${this.formURL}records/${recordId}/`);
  }

  updateRecord(formRecord: FormRecordDTO) {
    return this.apiService.post(`${this.formURL}records/${formRecord._id}/`, formRecord);
  }
}
