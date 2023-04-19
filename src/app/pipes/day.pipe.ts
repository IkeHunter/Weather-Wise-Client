import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDay'
})
export class DayPipe implements PipeTransform {

  transform(value: string): string {
    var timestamp = Number(value);
    var date = new Date(timestamp * 1000);
    return String(date.getUTCMonth() + 1) + "/" + String(date.getUTCDate()) + "";
  }

}
