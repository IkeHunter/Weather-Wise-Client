import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionRange'
})
export class ConditionRangePipe implements PipeTransform {

  transform(condition: string, range: string): string{
    let time: string;
    let type: string;

    if(range == "hour") {
      time = "Hourly";
    } else if(range == "day") {
      time = "Daily";
    } else {
      time = "No Data";
    }

    if(condition == "temp") {
      type = "Temperature";
    } else if(condition == "pop") {
      type = "Precipitation";
    } else if(condition == "humidity") {
      type = "Humidity";
    } else if(condition == "wind") {
      type = "Wind";
    } else {
      type = "No Data";
    }


    return time + " " + type + " Forecast";
  }

}
