import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class TimePipe implements PipeTransform {

  transform(timestamp: number): string {
    var date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
  }

}
