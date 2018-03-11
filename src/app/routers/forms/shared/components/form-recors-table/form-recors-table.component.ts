import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormDTO, FormRecordDTO} from '../../dto/form.dto';
import {FormService} from '../../services/form/form.service';

@Component({
  selector: 'inz-form-recors-table',
  templateUrl: './form-recors-table.component.html',
  styleUrls: ['./form-recors-table.component.sass']
})
export class FormRecorsTableComponent implements OnInit {

  constructor(private router: Router,
              private formService: FormService) {
  }

  private _form: FormDTO;

  get form(): FormDTO {
    return this._form;
  }

  @Input()
  set form(value: FormDTO) {
    if (value) {
      this._form = value;
    }
  }

  ngOnInit() {
  }

  getObjectKeys(object: Object): string[] {
    return Object.keys(object);
  }


  editRow(formRecordDTO: FormRecordDTO) {
    this.router.navigate(['/forms', this.form._id, 'records', formRecordDTO._id, 'edit']);

  }

  generateXML(dto: FormRecordDTO) {
    if (this.form.predefined && this.form.name === 'machine_tool_specification') {
      if (dto.values.its_elements) {
        dto.values.its_elements = dto.values.its_elements.map(element => {
          const flatCapabilities = [];
          for (const key in element.capabilities) {
            const value = element.capabilities[key];
            flatCapabilities.push(...value);
          }
          element.capabilities = flatCapabilities;
          return element;
        });
      }

    }
    const values = dto.values;
    const xml = `<${this.form.name}>${objectToXML(values)}</${this.form.name}>`;
    download('test.xml', xml);
  }

  removeRow(dta: FormRecordDTO) {
    if (confirm('Are you sure?')) {
      this.formService
        .removeRecord(dta._id)
        .subscribe(_ => {
          const indexOf = this.form.records.indexOf(dta);
          this.form.records.splice(indexOf, 1);
        })

      ;
    }
  }
}

function objectToXML(object) {
  let xml = ``;
  for (const key in object) {
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
