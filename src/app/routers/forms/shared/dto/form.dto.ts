export interface FormDTO {
  name: string;
  _id: string;
  inputs?: FormInputDTO[];
  records?: FormRecordDTO[];
}

export interface FormRecordDTO {
  _id?: string;
  values: any[];
}

export interface FormInputDTO {
  _id?: string;
  label: string;
  type: string;
  name: string;
}
