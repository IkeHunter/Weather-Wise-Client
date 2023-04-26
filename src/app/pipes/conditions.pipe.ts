import { Pipe, PipeTransform } from '@angular/core';
import { Condition } from '../models/summary.model';

@Pipe({
  name: 'conditions'
})
export class ConditionsPipe implements PipeTransform {
  // Unused
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

@Pipe({
  name: 'conditionValue'
})
export class ConditionValuePipe implements PipeTransform {
  /**
   * Converts condition value and symbol to unified string
   * @param value number, condition value
   * @param symbol string, condition symbol
   * @returns string, condition value + condition symbol. Ex: 10%
   */
  transform(value: number, symbol: string = ''): string {
    return (value || 0).toString() + symbol;
  }

}

@Pipe({
  name: 'conditionSymbol'
})
export class ConditionSymbolPipe implements PipeTransform {
  /**
   * Converts condition type to condition symbol
   * @param value string, condition type
   * @returns string, condition symbol. Ex: °, %, mph
   */
  transform(value: string): string {
    if(value === "temp") {
      return "°";
    } else if(value === "pop" || value === "humidity") {
      return "%";
    } else if(value === "wind") {
      return "mph";
    }else {
      return "";
    }
  }

}

@Pipe({
  name: 'conditionRange'
})
export class ConditionRangePipe implements PipeTransform {
  /**
   * Converts condition type and time range to unified string
   * @param condition string, condition type
   * @param range string, time range
   * @returns string, range + condition. Ex: Hourly Temperature Forecast
   */
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

@Pipe({
  name: 'conditionMap'
})
export class ConditionMapPipe implements PipeTransform {
  /**
   * Converts condition object to condition map to be used in ngFor
   * @param originalCondition Condition, populated condition object
   * @returns Map<String, String>, condition map with condition name as key and condition value as value.
   * Ex: Average Temp: 10º
   */
  transform(originalCondition: Condition): Map<String, String> {
    var conditions = new Map<String, String>();
    originalCondition.average_temp = Math.round((originalCondition.average_temp - 273.15) * 9/5 + 32);
    originalCondition.feels_like = Math.round((originalCondition.feels_like - 273.15) * 9/5 + 32);

    conditions.set('Average Temp', (originalCondition.average_temp || 0).toString() + 'º');
    conditions.set('Feels Like', (originalCondition.feels_like || 0).toString() + 'º');
    conditions.set('Pressure', (originalCondition.pressure || 0).toString());
    conditions.set('Humidity', (originalCondition.humidity || 0).toString() + '%');
    conditions.set('Chance of Rain', (originalCondition.pop || 0).toString() + '%');
    conditions.set('Rain Level', (originalCondition.rain_level || 0).toString() + '"');

    return conditions;
  }

}

@Pipe({
  name: 'kToF'
})
export class KelvinToFahrenheit implements PipeTransform {

  transform(value: number): number {
    return Math.round((value - 273.15) * 9/5 + 32);
  }

}

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(value: string): string {
    if(value.includes("n")) {
      let re = /n/gi;
      return value.replace(re, "d");
    }
    return value;
  }

}



