export interface FormDTO {
  name: string;
  _id?: string;
  inputs?: FormInputDTO[];
  records?: FormRecordDTO[];
  predefined: boolean;
  folder: string;
}

export interface FormRecordDTO {
  _id?: string;
  values: {};
}

export interface FormInputDTO {
  _id?: string;
  label: string;
  type: string;
  name: string;
}
