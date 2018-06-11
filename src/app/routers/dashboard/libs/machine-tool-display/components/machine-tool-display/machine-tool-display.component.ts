import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormDisplayNotificationService} from '../../../forms-display/serivces/form-display-notification/form-display-notification.service';
import {FormService} from '../../../../../forms/shared/services/form/form.service';
import {FormDTO, FormRecordDTO} from '../../../../../forms/shared/dto/form.dto';
import {download, objectToXML} from '../../../../utils';
import {MachineToolSpecification} from '../../../../../forms/machine-tool-specification/shared/models';

@Component({
  selector: 'inz-machine-tool-display',
  templateUrl: './machine-tool-display.component.html',
  styleUrls: ['./machine-tool-display.component.sass']
})
export class MachineToolDisplayComponent implements OnInit, OnChanges {
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
    const objToManipulate = Object.assign({}, record.values);
    objToManipulate.its_elements = objToManipulate.its_elements.map(element => {
      const output = [];
      for (const property of Object.keys(element.capabilities)) {
        const capability = element.capabilities[property];
        output.push(...capability);
      }
      element.capabilities = output;
      return element;
    });

    const xml = `<machine_tool_specification>${objectToXML(objToManipulate)}</machine_tool_specification>`;
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
