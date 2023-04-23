import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHour'
})
export class HourPipe implements PipeTransform {

  transform(value: string): string {
    var timestamp = Number(value);
    var date = new Date(timestamp * 1000);
    return date.getHours().toString() + ":00";
    // return date.getUTCHours() + ":00";
  }

}
