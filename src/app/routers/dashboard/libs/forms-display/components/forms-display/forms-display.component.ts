import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormService} from '../../../../../forms/shared/services/form/form.service';
import {FormDTO, FormRecordDTO} from '../../../../../forms/shared/dto/form.dto';
import {FormDisplayNotificationService} from '../../serivces/form-display-notification/form-display-notification.service';

@Component({
  selector: 'inz-forms-display',
  templateUrl: './forms-display.component.html',
  styleUrls: ['./forms-display.component.sass']
})
export class FormsDisplayComponent implements OnInit, OnChanges {
  @Input() formId: string;
  form: FormDTO = null;
  isWrongForm = false;

  constructor(private formService: FormService,
              private formDisplayNotificationService: FormDisplayNotificationService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchFormRecords();
  }

  removeRow(record: FormRecordDTO) {
    if (confirm('Are you sure?')) {
      this.formService.removeFormRecord(this.formId, record._id)
        .subscribe(value => {
          this.formDisplayNotificationService.recordRemoved();
          this.fetchFormRecords();
        }, error => {
          this.formDisplayNotificationService.errorWhileRemoving();
        });
    }
  }

  generateXML(record: FormRecordDTO) {
    let xml = objectToXML(record.values);
    const name = this.form.name.replace(' ', '_');
    xml = `<${name}>${xml}</${name}>`;
    download(this.form.name + '.xml', xml);
  }

  private fetchFormRecords() {
    this.formService
      .getForm(this.formId)
      .subscribe(
        value => {
          this.form = value;
          this.isWrongForm = false;
        },
        error => {
          this.form = null;
          this.isWrongForm = true;
          this.formDisplayNotificationService.incorrectData();
        }
      );
  }

}

function objectToXML(object) {
  let xml = ``;
  for (const key of Object.keys(object)) {
    const value = object[key];

    if (Object.prototype.toString.call(value) === '[object Object]') {
      const nestedXML = objectToXML(value);
      xml += keyValueToXML(key, nestedXML);
    } else if (Object.prototype.toString.call(value) === '[object Array]') {
      value.forEach(element => {
        const nestedXML = objectToXML(element);
        xml += keyValueToXML(key, nestedXML);
      });
    } else {
      xml += keyValueToXML(key, value);
    }
  }
  return xml;
}

function keyValueToXML(key, value) {
  if (value === null) {
    return `<${key}></${key}>`;
  } else {
    return `<${key}>${value}</${key}>`;
  }
}

function download(filename, text) {
  const data = new Blob([text]);
  const element = document.createElement('a');
  element.setAttribute('href', URL.createObjectURL(data));
  element.setAttribute('type', 'text/xml');
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
