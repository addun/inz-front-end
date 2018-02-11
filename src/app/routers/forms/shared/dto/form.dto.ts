export interface FormDTO {
  name: string;
  _id: string;
  inputs?: FormInput[];
  data?: FormRecordDTO[];
}

export interface FormRecordDTO {
  _id?: string;
  values: any[];
}

export interface FormInput {
  _id?: string;
  label: string;
  type: string;
  name: string;
}
