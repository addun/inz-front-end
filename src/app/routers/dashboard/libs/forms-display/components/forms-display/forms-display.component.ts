import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormService} from '../../../../../forms/shared/services/form/form.service';
import {FormDTO, FormRecordDTO} from '../../../../../forms/shared/dto/form.dto';
import {FormDisplayNotificationService} from '../../serivces/form-display-notification/form-display-notification.service';
import {download, objectToXML} from '../../../../utils';

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
