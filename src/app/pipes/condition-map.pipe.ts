import { Pipe, PipeTransform } from '@angular/core';
import { Condition } from '../models/summary.model';

@Pipe({
  name: 'conditionMap'
})
export class ConditionMapPipe implements PipeTransform {


  transform(originalCondition: Condition): Map<String, String> {
    var conditions = new Map<String, String>();

    conditions.set('Average Temp', (originalCondition.average_temp || 0).toString() + 'º');
    conditions.set('Feels Like', (originalCondition.feels_like || 0).toString() + 'º');
    conditions.set('Pressure', (originalCondition.pressure || 0).toString());
    conditions.set('Humidity', (originalCondition.humidity || 0).toString() + '%');
    conditions.set('Chance of Rain', (originalCondition.pop || 0).toString() + '%');
    conditions.set('Rain Level', (originalCondition.rain_level || 0).toString() + '"');

    return conditions;
  }

}
