import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(values: any[], args: string[]): any {
    const keys = [];
    for (const enumMember in values) {
      if (values.hasOwnProperty(enumMember)) {
        keys.push({key: enumMember, value: values[enumMember]});
      }
    }
    return keys;
  }

}
