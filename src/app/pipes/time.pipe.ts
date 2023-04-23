import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class TimePipe implements PipeTransform {
  /**
   * Converts unix timestamp to 12 hour time
   * @param timestamp number, unix timestamp
   * @returns string, 00:000 AM/PM
   */
  transform(timestamp: number): string {
    var date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
  }
}

@Pipe({
  name: 'toHour'
})
export class HourPipe implements PipeTransform {
  /**
   * Converts unix timestamp to 24 hour time
   * @param value string, unix timestamp
   * @returns string, 00:00
   */
  transform(value: string): string {
    var timestamp = Number(value);
    var date = new Date(timestamp * 1000);
    return date.getHours().toString() + ":00";
  }

}

@Pipe({
  name: 'toDay'
})
export class DayPipe implements PipeTransform {
  /**
   * Converts unix timestamp to day of the month
   * @param value string, unix timestamp
   * @returns string, 00/00
   */
  transform(value: string): string {
    var timestamp = Number(value);
    var date = new Date(timestamp * 1000);
    return String(date.getUTCMonth() + 1) + "/" + String(date.getUTCDate()) + "";
  }

}

@Pipe({
  name: 'toDayMonthYear'
})
export class DayMonthYear implements PipeTransform {
  /**
   * Converts unix timestamp to day of the month
   * @param value string, unix timestamp
   * @returns string, 00/00
   */
  transform(value: number): string {
    var timestamp = Number(value);
    var date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US");
    // return String(date.getUTCMonth() + 1) + "/" + String(date.getUTCDate()) + "/" + String(date.getFullYear());
  }

}

@Pipe({
  name: 'toDayMonth'
})
export class DayMonth implements PipeTransform {
  /**
   * Converts unix timestamp to day of the month
   * @param value string, unix timestamp
   * @returns string, 00/00
   */
  transform(value: number): string {
    var timestamp = Number(value);
    var date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {month: "short", day: "numeric"});
    // return String(date.getUTCMonth() + 1) + "/" + String(date.getUTCDate());
  }

}
